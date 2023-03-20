import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import notificationSound from '../assets/WaterDrop.mp3';

const playNotification = async () => {
  try {
    await new Audio(notificationSound).play();
  } catch (error) {
    console.log(error);
  }
};

const useNotification = (value) => {
  const prevMessagesRef = useRef(0);
  const prevMessages = prevMessagesRef.current;

  useEffect(() => {
    prevMessagesRef.current = value;

    if (prevMessages > 0 && prevMessages !== value) {
      // playNotification();
      console.log('unread');
      console.log(prevMessages);
      console.log(value);
    }
  }, [value, prevMessages]);

  return prevMessages > 0 && prevMessages !== value ? true : false;
};

export default useNotification;
