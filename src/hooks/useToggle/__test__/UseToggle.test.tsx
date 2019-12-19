import React from 'react';
import UseToggleExample from '../UseToggleExample';
import { render, fireEvent } from '@testing-library/react';

describe('<UseToggleExample />', () => {
  it('matches snapshot', () => {
    const utils = render(<UseToggleExample />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correct', () => {
    const utils = render(<UseToggleExample />);
    utils.getByText('false');
    utils.getByText('toggle button');
  });

  it('click button', () => {
    const utils = render(<UseToggleExample />);
    const toggleElement = utils.getByText('false');
    const toggleButton = utils.getByText('toggle button');

    // test event false -> true
    fireEvent.click(toggleButton);

    expect(toggleElement.textContent).toBe('true');
    expect(toggleElement).toHaveTextContent('true');

    // test event true -> false
    fireEvent.click(toggleButton);

    expect(toggleElement.textContent).toBe('false');
    expect(toggleElement).toHaveTextContent('false');
  });
});
