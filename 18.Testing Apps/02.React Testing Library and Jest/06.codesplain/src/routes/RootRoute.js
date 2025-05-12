import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function RootRoute() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default RootRoute;
