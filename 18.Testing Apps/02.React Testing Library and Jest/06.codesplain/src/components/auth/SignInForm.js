import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Input from '../forms/Input';
import Button from '../forms/Button';
import FormError from '../forms/FormError';
import useSignIn from '../../hooks/useSignIn';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, error, isLoading, isSignedIn } = useSignIn();

  const handleSubmit = async (event) => {
    event.preventDefault();

    signIn({
      email,
      password,
    });
  };

  if (isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-6">
      <div className="col-span-6">
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          error={error}
        />
      </div>

      <div className="col-span-6">
        <Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          error={error}
        />
      </div>

      <FormError error={error} className="col-span-6" />

      <div className="col-span-6 flex items-center">
        <Button wide loading={isLoading} type="submit">
          Sign In
        </Button>
      </div>

      <div className="col-span-6 flex items-center">
        <p className="text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-gray-700 underline">
            Sign up
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

export default SignInForm;
