import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Challenge3 from './Challenge3';

function submitValues(languageString: string, language: string) {
  const input1 = screen.getByLabelText('Language String');
  fireEvent.change(input1, { target: { value: languageString } });

  const input2 = screen.getByLabelText('Select language');
  fireEvent.change(input2, { target: { value: language } });

  const submitButton = screen.getByText(/GO/i);
  fireEvent.click(submitButton);
}

describe('Challenge 2 Tests', () => {
  test('error on empty language string', async () => {
    render(<Challenge3 />);

    // Click button
    submitValues('', 'en');
    expect(await screen.findByText('Need to enter language string')).toBeVisible();
  });

  test('error on invalid language string', async () => {
    render(<Challenge3 />);

    // Click button
    submitValues('this-doesnt-exist', 'en');
    expect(await screen.findByText('Language string doesnt exist')).toBeVisible();

    submitValues('This doesnt exist either', 'nl');
    expect(await screen.findByText('Language string doesnt exist')).toBeVisible();
  });

  test('load valid language strings', async () => {
    render(<Challenge3 />);

    // Click button
    submitValues('hi', 'en');
    expect(await screen.findByText('Language string = Hi')).toBeVisible();

    submitValues('country', 'en');
    expect(await screen.findByText('Language string = Country')).toBeVisible();

    submitValues('hi', 'nl');
    expect(await screen.findByText('Language string = Hoi')).toBeVisible();

    submitValues('country', 'nl');
    expect(await screen.findByText('Language string = Land')).toBeVisible();
  });

  test('load valid language strings', async () => {
    render(<Challenge3 />);

    // Click button
    submitValues('hi', 'en');
    expect(await screen.findByText('Language string = Hi')).toBeVisible();
  });
});
