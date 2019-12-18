import React from 'react';
import useInputs from './useInputs';

function UseInputsExample() {
  const [{ nickname, email }, onChange, reset] = useInputs({
    nickname: '',
    email: '',
  });

  console.log(nickname, email);

  return (
    <>
      <input name="nickname" placeholder="nickname" value={nickname} onChange={e => onChange(e)} />
      <input name="email" placeholder="email" value={email} onChange={e => onChange(e)} />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default UseInputsExample;
