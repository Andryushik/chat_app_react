import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    prevMessagesRef.current = value;
    playNotification();
    console.log('from notification');
  }, [value]);
};

export default useNotification;
