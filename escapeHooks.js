import React, { useCallback, useEffect } from 'react';

const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      ');
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
