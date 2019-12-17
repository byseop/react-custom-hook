import { useState, useCallback } from 'react';

/**
 *
 * useInputs
 *
 * @export
 * @template Form
 * @param {Form} initialForm
 * @returns {[Form, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void]}
 */

export default function useInputs<Form>(
  initialForm: Form,
): [Form, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}
