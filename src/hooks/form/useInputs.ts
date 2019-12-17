import { useCallback, useReducer } from 'react';

/**
 *
 *** useInputs
 *
 * @export
 * @template Form
 * @param {Form} initialForm
 * @returns {[Form, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void]}
 */

type Action = { type: 'CHANGE'; payload: { name: string; value: string } } | { type: 'RESET' };

export default function useInputs<Form>(
  initialForm: Form,
): [Form, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
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

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', payload: { name, value } });
  }, []);

  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  return [form, onChange, reset];
}
