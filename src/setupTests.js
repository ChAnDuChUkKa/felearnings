// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { server } from "./mocks/server";

import { createMemoryHistory } from "history";

import { Router } from "react-router-dom";

global.renderWithRouter = (renderComponent, route) => {
  const history = createMemoryHistory();

  if (route) {
    history.push(route);
  }
  return (<Router history={history}>{renderComponent()}</Router>), history;
};

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
