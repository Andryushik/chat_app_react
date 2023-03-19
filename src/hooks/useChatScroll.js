import { useEffect, useRef } from 'react';

const useChatScroll = (messages) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages]);

  return ref;
};

export default useChatScroll;
