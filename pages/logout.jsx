import { useEffect } from 'react';

export default function Login({ }) {
  useEffect(() => {
    localStorage.removeItem('storageUser');
    window.location.href = '/';
  }, []);

  return <></>
}