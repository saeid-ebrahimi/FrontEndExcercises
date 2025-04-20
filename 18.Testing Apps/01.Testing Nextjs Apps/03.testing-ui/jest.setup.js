// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { server } from './__tests__/__mocks__/msw/node'

beforeAll(() => {
    // Enable API mocking before all the tests.
    server.listen()
})

afterEach(() => {
    // Reset the request handlers between each test.
    // This way the handlers we add on a per-test basis
    // do not leak to other, irrelevant tests.
    server.resetHandlers()
})

afterAll(() => {
    // Finally, disable API mocking after the tests are done.
    server.close()
})