import { useState } from 'react';

type ActiveState = boolean;
type Methods = {
  activate: () => void;
  deactivate: () => void;
};

/**
 *
 *** useActive
 *
 * @export
 * @param {ActiveState} initialState
 * @returns {[ActiveState, Methods]}
 */

export default function useActive(initialState: ActiveState = false): [ActiveState, Methods] {
  const [isActive, setActive] = useState<ActiveState>(initialState);

  const activate = () => {
    setActive(true);
  };

  const deactivate = () => {
    setActive(false);
  };

  return [isActive, { activate, deactivate }];
}
