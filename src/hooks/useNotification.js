import { useEffect, useRef } from 'react';

const useNotification = (value) => {
  const prevMessagesRef = useRef(0);
  const prevMessages = prevMessagesRef.current;

  useEffect(() => {
    prevMessagesRef.current = value;
  }, [value, prevMessages]);

  return prevMessages > 0 && prevMessages !== value ? true : false;
};

export default useNotification;
