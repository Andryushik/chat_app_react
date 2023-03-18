import { useEffect, useRef } from 'react';

const useChatScroll = (messages) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  return ref;
};

export default useChatScroll;
