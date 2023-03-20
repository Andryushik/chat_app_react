import notificationSound from '../assets/WaterDrop.mp3';

const playNotification = async () => {
  try {
    await new Audio(notificationSound).play();
  } catch (error) {
    console.log(error);
  }
};

export default playNotification;
