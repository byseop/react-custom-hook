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
      <input name="nickname" value={nickname} onChange={e => onChange(e)} />
      <input name="email" value={email} onChange={e => onChange(e)} />
      <button onClick={reset} />
    </>
  );
}

export default UseInputsExample;
