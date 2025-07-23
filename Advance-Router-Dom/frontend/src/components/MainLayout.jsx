import { Outlet } from 'react-router-dom';

import MainNavigation from './MainNavigation';

export default function MainLayout() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
