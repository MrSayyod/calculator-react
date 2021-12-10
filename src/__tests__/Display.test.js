import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import Display from '../components/Display';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('displays the result', () => {
  const { renderer } = render(<Display total="1" />);
  expect(screen.getByTestId('display-test')).toHaveTextContent('1');
  expect(renderer).toMatchSnapshot();
});
