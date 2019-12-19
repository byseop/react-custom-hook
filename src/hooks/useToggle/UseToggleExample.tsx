import React from 'react';
import useToggle from './useToggle';

export default function UseToggleExmaple() {
  const [toggleState, toggle] = useToggle(false);

  return (
    <>
      <div>{toggleState ? 'true' : 'false'}</div>
      <button onClick={toggle}>toggle button</button>
    </>
  )
}