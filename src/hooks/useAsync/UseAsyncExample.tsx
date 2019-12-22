import React, { useEffect } from 'react';
import useAsync from '../useAsync/useAsync';

export interface SampleType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export default function UseAsyncExample() {
  const [state, asyncRequest] = useAsync();

  useEffect(() => {
    asyncRequest({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/users',
    });
  }, [asyncRequest]);

  const { loading, data, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>
  }

  return (
    <div>
      {data?.map((user: SampleType) => {
        const { name, email } = user;
        return (
          <div key={user.id}>
            {name}: {email}
          </div>
        );
      })}
    </div>
  );
}
