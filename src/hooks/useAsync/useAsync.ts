import { useReducer, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

type State = {
  loading: boolean;
  data: any;
  error: Error | null;
};

type Action =
  | { type: 'REQUEST_START' }
  | { type: 'REQUEST_SUCCESS'; payload: any }
  | { type: 'REQUEST_ERROR'; payload: Error };

export default /**
 *
 *** useAsync
 *
 * @export
 * @returns {[State: { loading: boolean, data: any, error: Error | null }, (config: AxiosRequestConfig) => Promise<void>]}
 */
function useAsync(): [State, (config: AxiosRequestConfig) => Promise<void>] {
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };

  const reducer = function(state: State, action: Action) {
    switch (action.type) {
      case 'REQUEST_START':
        return {
          ...initialState,
          loading: true,
        };
      case 'REQUEST_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case 'REQUEST_ERROR':
        return {
          ...state,
          loading: false,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [requestState, dispatch] = useReducer(reducer, initialState);

  const asyncRequest = useCallback(async (config: AxiosRequestConfig) => {
    dispatch({ type: 'REQUEST_START' });
    const response = await axios(config);
    try {
      dispatch({ type: 'REQUEST_SUCCESS', payload: response.data });
    } catch (e) {
      dispatch({ type: 'REQUEST_ERROR', payload: e });
    }
  }, []);

  return [{ ...requestState }, asyncRequest];
}
