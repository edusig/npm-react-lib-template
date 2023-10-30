import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { ExampleComponent } from './example';

describe('Example component', () => {
  test('It renders', () => {
    render(<ExampleComponent />);
    const p = screen.getByText('Example paragraph');
    expect(p).toBeInTheDocument();
  });
});
