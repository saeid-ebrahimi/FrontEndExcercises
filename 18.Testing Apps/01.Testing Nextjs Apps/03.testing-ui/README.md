# Popular Concert Venue

## An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
1. Run `cp .env.development.local_template .env.development.local`
1. Run `cp .env.development.test .env.test.local`
1. Run `cp .env.local_template .env.local`
1. In _.env.local_ and _.env.test.local_:

- add long, hard-to-guess strings as the values for `NEXT_AUTH_SECRET` and `REVALIDATION_SECRET`

  - command to generate a random string: `openssl rand -hex 32`

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]
