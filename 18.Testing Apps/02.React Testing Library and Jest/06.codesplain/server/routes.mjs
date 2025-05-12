import Prisma from '@prisma/client';
import express from 'express';
import axios from 'axios';
import * as validators from './validators.mjs';
import client from './prisma/client.mjs';
import * as auth from './auth.mjs';

const routes = express.Router();

routes.post('/api/auth/signup', async (req, res) => {
  const errors = validators.validateSignUp(req.body);
  if (errors) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;
  try {
    const user = await auth.createUser(email, password);
    req.session = { id: user.id };
    res.send({ id: user.id });
  } catch (err) {
    console.error(err);
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        return res.status(400).json({ email: ['Email in use.'] });
      }
    } else {
      return res.status(401).json({ message: 'Error signing up.' });
    }
  }
});

routes.post('/api/auth/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password must be provided',
    });
  }

  try {
    const user = await auth.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Email not found.' });
    }

    const isValid = await auth.verifyPassword(user, password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid passowrd' });
    }

    req.session = { id: user.id };
    res.send({ id: user.id });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Error signing in.' });
  }
});

routes.get('/api/auth/signout', (req, res) => {
  req.session = null;
  res.send({ success: true });
});

routes.get('/api/user', async (req, res) => {
  const { id } = req.session;

  if (!id) {
    return res.json({
      user: null,
    });
  }

  const user = await client.user.findUnique({
    where: { id },
  });

  if (!user) {
    return res.json({
      user: null,
    });
  }

  res.json({
    user: {
      id: user.id,
      email: user.email,
    },
  });
});

routes.get('/api/repositories', async (req, res) => {
  const cachedResponse = await client.cachedResponse.findUnique({
    where: { id: JSON.stringify(req.query) },
  });
  if (cachedResponse) {
    return res.json(JSON.parse(cachedResponse.value));
  }

  try {
    const { data } = await axios.get(process.env.UPSTREAM_API + req.url);

    await client.cachedResponse.create({
      data: {
        id: JSON.stringify(req.query),
        value: JSON.stringify(data),
      },
    });

    res.json(data);
  } catch (err) {
    if (err.response) {
      console.error(
        err.config.method + ' ' + err.config.baseURL + err.config.url
      );
      console.error(err.response.data);
      return res.status(err.response.status).json(err.response.data);
    }
    res.status(500).json({ message: err.message });
  }
});

routes.get('/api/repositories/:owner/:name/contents/*', async (req, res) => {
  try {
    const cachedResponse = await client.cachedResponse.findUnique({
      where: { id: JSON.stringify(req.params) },
    });
    if (cachedResponse) {
      return res.json(JSON.parse(cachedResponse.value));
    }
    const { data } = await axios.get(process.env.UPSTREAM_API + req.url);

    await client.cachedResponse.create({
      data: {
        id: JSON.stringify(req.params),
        value: JSON.stringify(data),
      },
    });

    return res.json(data);
  } catch (err) {
    if (err.response) {
      console.error(
        err.config.method + ' ' + err.config.baseURL + err.config.url
      );
      console.error(err.response.data);
      return res.status(err.response.status).json(err.response.data);
    }
    res.status(500).json({ message: err.message });
  }
});

const requireUser = (req, res, next) => {
  if (!req.session || !req.session.id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};

routes.post('/api/explain', async (req, res) => {
  try {
    const { data } = await axios.post(
      process.env.UPSTREAM_API + '/api/explain',
      {
        text: req.body.text,
        language: req.body.language,
      }
    );

    res.send(data);
  } catch (err) {
    if (err.response) {
      console.error(
        err.config.method + ' ' + err.config.baseURL + err.config.url
      );
      console.error(err.response.data);
      return res.status(err.response.status).json(err.response.data);
    }
    res.status(500).json({ message: err.message });
  }
});

export default routes;
