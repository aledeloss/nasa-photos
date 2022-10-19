import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Page from '../';

it('should render the page title', () => {
  global.scrollTo = jest.fn();
  const history = createMemoryHistory();
  const route = '/whatever-the-route-is';
  history.push(route);

  const { getByText } = render(
      <Router history={history}>
        <Page/>
      </Router>
  );
  const linkElement = getByText(/RANDOM NASA PIC OF THE DAY/i);
  expect(linkElement).toBeInTheDocument();
});
