import { useEffect, useState } from 'react';

const useScrollProgress = () => {
  const [complete, setcomplete] = useState(0);

  useEffect(() => {
    const updateScrollComplete = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setcomplete(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    // Event
    window.addEventListener('scroll', updateScrollComplete);

    // Remove Listener
    return () => {
      window.removeEventListener('scroll', updateScrollComplete);
    };
  }, []);

  return complete;
};

export default useScrollProgress;
