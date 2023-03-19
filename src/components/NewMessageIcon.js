import { useLocation } from 'react-router-dom';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import IconButton from '@mui/material/IconButton';
import { CHAT_ROUTE } from '../utils/constants';

const NewMessageIcon = () => {
  const location = useLocation();

  return (
    <>
      <IconButton color="inherit" sx={{ ml: 3 }}>
        {location.pathname !== CHAT_ROUTE ? (
          <MarkUnreadChatAltIcon fontSize="large" />
        ) : (
          <MarkChatReadIcon fontSize="large" />
        )}
      </IconButton>
    </>
  );
};

export default NewMessageIcon;
