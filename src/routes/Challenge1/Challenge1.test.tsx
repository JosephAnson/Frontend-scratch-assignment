import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Challenge1 from './Challenge1';

function submitValues(input1Value: string, input2Value: string) {
  const input1 = screen.getByLabelText('Value 1');
  fireEvent.change(input1, { target: { value: input1Value } });

  const input2 = screen.getByLabelText('Value 2');
  fireEvent.change(input2, { target: { value: input2Value } });

  const submitButton = screen.getByText(/Add Sum to Collected Sums/i);
  fireEvent.click(submitButton);
}

describe('Challenge 1 Tests', () => {
  test('create single sum', async () => {
    render(<Challenge1 />);

    submitValues('100', '200');
    expect(await screen.findByText('Total Number is: 300')).toBeVisible();
  });

  test('create single decimal sum', async () => {
    render(<Challenge1 />);

    submitValues('0.123', '0.123');
    expect(await screen.findByText('Total Number is: 0.246')).toBeVisible();
  });

  test('add multiple sums', async () => {
    render(<Challenge1 />);

    submitValues('0.000000000001', '0.000000000003');
    submitValues('0.000000001', '0.000000003');
    submitValues('40', '0.23');

    expect(await screen.findByText('Total Number is: 40.230000004004')).toBeVisible();
  });

  test('check errors for incorrect characters', async () => {
    render(<Challenge1 />);

    // Checks special characters one at a time
    const specialCharacters: string[] = `~!@#$%^&*()-_=+[]\{}|;':",./<>?`.split('');

    for (let i = 0; i < specialCharacters.length; i++) {
      submitValues(specialCharacters[i], specialCharacters[i]);
      expect(
        await screen.findByText('We only accept valid decimal numbers, no sums have been added')
      ).toBeVisible();
    }
  });

  test('check inputs individually to error correctly', async () => {
    render(<Challenge1 />);

    submitValues('dave', '0.00001');
    expect(
      await screen.findByText('We only accept valid decimal numbers, no sums have been added')
    ).toBeVisible();

    submitValues('1', 'cat');
    expect(
      await screen.findByText('We only accept valid decimal numbers, no sums have been added')
    ).toBeVisible();
  });

  test('check inputs error when empty', async () => {
    render(<Challenge1 />);

    submitValues('', '0.001231');
    expect(
      await screen.findByText('We only accept valid decimal numbers, no sums have been added')
    ).toBeVisible();

    submitValues('22', '');
    expect(
      await screen.findByText('We only accept valid decimal numbers, no sums have been added')
    ).toBeVisible();
  });

  test('add complex numbers', async () => {
    render(<Challenge1 />);

    submitValues('0.00001234', '0.0002109831');
    submitValues('0.000000001', '0.000000003');
    submitValues('1241', '0.234');
    submitValues('1231123', '0.109823');
    submitValues('123.123019', '0.233333');

    expect(await screen.findByText('Total Number is: 1231286.6963983271')).toBeVisible();
  });

});
