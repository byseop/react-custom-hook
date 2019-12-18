import React from 'react';
import useActive from './useActive';

export default function UseActiveExample() {
  const [isActive, { activate, deactivate }] = useActive(false);

  return (
    <>
      {isActive ? <div>Active</div> : <div>Deactive</div>}
      <button onClick={activate}>Active</button>
      <button onClick={deactivate}>Deactive</button>
    </>
  );
}
