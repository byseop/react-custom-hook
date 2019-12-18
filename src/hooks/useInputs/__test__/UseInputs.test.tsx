import React from 'react';
import UseInputsExample from '../UseInputsExample';
import { render, fireEvent } from '@testing-library/react';

describe('<UseInputsExample />', () => {
  it('matches snapshot', () => {
    const utils = render(<UseInputsExample />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<UseInputsExample />);
    utils.getByPlaceholderText('nickname');
    utils.getByPlaceholderText('email');
  })

  it('typing input', () => {
    const utils = render(<UseInputsExample />);
    const nicknameInput = utils.getByPlaceholderText('nickname');
    const emailInput = utils.getByPlaceholderText('email');
    const resetButton = utils.getByText('Reset');

    fireEvent.change(nicknameInput, { target: { value: 'byseop' } });
    fireEvent.change(emailInput, { target: { value: 'byseop@gmail.com' } });

    expect(nicknameInput).toHaveValue('byseop');
    expect(emailInput).toHaveValue('byseop@gmail.com');

    fireEvent.click(resetButton);
    expect(nicknameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});
