import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Challenge2 from './Challenge2';

describe('Challenge 2 Tests', () => {
  test('create single box', async () => {
    render(<Challenge2 />);

    // Click button
    fireEvent.click(screen.getByText('Add Box'));

    // Wait for page to update with query text
    const items = await screen.findAllByText('0');
    expect(items).toHaveLength(1);
  });

  test('create 3 boxes', async () => {
    render(<Challenge2 />);

    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByText('Add Box'));
    }

    const items = await screen.findAllByText('2');
    expect(items).toHaveLength(1);
  });

  test('create 2 rows', async () => {
    render(<Challenge2 />);

    for (let i = 0; i < 10; i++) {
      fireEvent.click(screen.getByText('Add Box'));
    }

    const items = await screen.findAllByTestId('box-row');
    expect(items).toHaveLength(2);
  });
});
