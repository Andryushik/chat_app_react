import { Outlet } from 'react-router-dom';
import FooterBar from '../components/FooterBar';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterBar />
    </>
  );
};

export default MainLayout;
