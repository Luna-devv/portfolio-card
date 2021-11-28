import { useEffect } from 'react';

export default function Login({ }) {
  useEffect(() => {
    localStorage.removeItem('user');
    window.location.href = '/';
  }, []);

  return <></>
}