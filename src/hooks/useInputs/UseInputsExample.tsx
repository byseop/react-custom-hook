import React from 'react';
import useInputs from './useInputs';

function UseInputsExample() {
  const [{ nickname, email }, onChange, reset] = useInputs({
    nickname: '',
    email: '',
  });

  return (
    <>
      <input
        name="nickname"
        placeholder="nickname"
        value={nickname}
        onChange={e =>
          onChange(e, () => {
            console.log('This is callback');
          })
        }
      />
      <input name="email" placeholder="email" value={email} onChange={e => onChange(e)} />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default UseInputsExample;
