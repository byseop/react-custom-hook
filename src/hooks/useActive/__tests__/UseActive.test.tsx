import React from 'react';
import UseActiveExmaple from '../UseActiveExample';
import { render, fireEvent } from '@testing-library/react';

describe('<UseActiveExample />', () => {
  it('matches snapshot', () => {
    const utils = render(<UseActiveExmaple />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<UseActiveExmaple />);
    utils.getByText('Active');
    utils.getByText('Deactive');
    utils.getByText('Deactivate');
  });

  it('click activate button', () => {
    const utils = render(<UseActiveExmaple />);
    const isActive = utils.getByText('Deactivate');
    const acivateButton = utils.getByText('Active');

    fireEvent.click(acivateButton);

    expect(isActive).toHaveTextContent('Activate');
    expect(isActive.textContent).toBe('Activate');
  });

  it('click deactivate button', () => {
    const utils = render(<UseActiveExmaple />);
    const isActive = utils.getByText('Deactivate');
    const acivateButton = utils.getByText('Active');
    const deactivateButton = utils.getByText('Deactive');

    fireEvent.click(acivateButton);
    fireEvent.click(deactivateButton);
    
    expect(isActive).toHaveTextContent('Deactivate');
    expect(isActive.textContent).toBe('Deactivate');
  });
});
