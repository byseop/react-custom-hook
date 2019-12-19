import { useState, useCallback } from 'react';

type ToggleState = boolean;
type SetToggleState = () => void;

/**
 *
 *** useToggle
 *
 * @export
 * @param {ToggleState} [initialState=false]
 * @returns {[ToggleState, SetToggleState]}
 */

export default function useToggle(
  initialState: ToggleState = false,
): [ToggleState, SetToggleState] {
  const [toggleState, setToggleState] = useState<ToggleState>(initialState);

  const toggle = useCallback(() => {
    setToggleState(!toggleState);
  }, [toggleState]);

  return [toggleState, toggle];
}
