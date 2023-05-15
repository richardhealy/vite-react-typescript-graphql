import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/ui/templates/main/Main';
import { WelcomePage } from '@/pages/Welcome';

export const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<WelcomePage />} />
    </Route>
  </Routes>
);
