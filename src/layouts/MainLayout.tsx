import * as UI from '../components';
import type * as React from 'react';

export const MainLayout = ({
  children,
  leftLinks,
}: {
  children: React.ReactNode;
  leftLinks?: React.ReactNode;
}) => {
  return (
    <>
      <UI.NavBar leftLinks={leftLinks} />
      <main>{children}</main>
      <UI.Footer />
    </>
  );
};

export default MainLayout;
