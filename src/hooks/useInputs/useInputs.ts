import { useCallback, useReducer } from 'react';

type Action = { type: 'CHANGE'; payload: { name: string; value: string } } | { type: 'RESET' };

/**
 *
 *** useInputs
 *
 * @export
 * @template Form
 * @param {Form} initialForm
 * @param {Function} [callback]
 * @returns {[Form, (e: React.ChangeEvent<HTMLInputElement>, callback?: Function) => void, (callback?: Function) => void]}
 */
export default function useInputs<Form>(
  initialForm: Form,
): [
  Form,
  (e: React.ChangeEvent<HTMLInputElement>, callback?: Function) => void,
  (callback?: Function) => void,
] {
  const reducer = function(state: Form, action: Action): Form {
    switch (action.type) {
      case 'CHANGE': {
        const { name, value } = action.payload;
        return {
          ...state,
          [name]: value,
        };
      }
      case 'RESET':
        return initialForm;
      default:
        return state;
    }
  };

  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, callback?: Function) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', payload: { name, value } });
    callback?.();
  }, []);

  const reset = useCallback((callback?: Function) => {
    dispatch({ type: 'RESET' });
    callback?.();
  }, []);

  return [form, onChange, reset];
}
