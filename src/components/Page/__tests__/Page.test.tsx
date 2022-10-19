import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Page from '../';

const renderPage = () => {
  global.scrollTo = jest.fn();
  const history = createMemoryHistory();
  const route = '/whatever-the-route-is';
  history.push(route);

  const { getByText } = render(
        <Router history={history}>
          <Page/>
        </Router>
  );
  return { getByText };
};

it('should render the page title', () => {
  const { getByText } = renderPage();
  const titleText = getByText(/RANDOM NASA PIC OF THE DAY/i);
  expect(titleText).toBeInTheDocument();
});

it('should render the page footer', () => {
  const { getByText } = renderPage();
  const footerText = getByText(/Made by/i);
  expect(footerText).toBeInTheDocument();
});
