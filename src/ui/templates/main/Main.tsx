import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="h-full max-h-screen bg-white flex flex-col">
      <Outlet />
    </div>
  );
};
