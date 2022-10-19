import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '..';

test('renders two buttons texts', () => {
  render(<Menu
    link={'fakeURL'}
    handleChangePic={jest.fn()}/>);
  const changeText = screen.getByText(/CHANGE/i);
  expect(changeText).toBeInTheDocument();
  const copyText = screen.getByText(/COPY LINK/i);
  expect(copyText).toBeInTheDocument();
});
