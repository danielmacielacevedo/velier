import React, { useEffect } from 'react';

export default function Gallery() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.dataset.useServiceCore = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
        <div className="elfsight-app-595dd9d0-d4e8-4ecb-a197-a882c1a22af4"></div>
    </>
  );
};
