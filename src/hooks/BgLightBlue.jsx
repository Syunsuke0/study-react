import { useEffect } from 'react';

export const BgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
};
