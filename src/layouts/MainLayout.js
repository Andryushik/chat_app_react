import { Outlet } from 'react-router-dom';
import FooterBar from '../components/FooterBar';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Outlet />
      <FooterBar />
    </div>
  );
};

export default MainLayout;
