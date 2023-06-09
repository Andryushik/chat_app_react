export const HOME_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const CHAT_ROUTE = '/chat';
export const adminUid = process.env.REACT_APP_ADMIN_UID;

export const styleModal = {
  position: 'absolute',
  display: 'flex',
  width: '50%',
  maxWidth: 500,
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

export const styleFab = {
  zIndex: 1,
  left: 0,
  right: 0,
  marginLeft: 1,
};
