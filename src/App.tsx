import { HashRouter, Route, Routes } from 'react-router-dom';
import { NavItem } from './components/NavBar';
import MainLayout from './layouts/MainLayout';
import FeaturesPage from './pages/Features';
import Landing from './pages/Landing';

function App() {
  const landingLeftLinks = (
    <>
      <NavItem label={'Overview'} href={'#features'} variant={'left'} />
      <NavItem label={'Networks'} href={'#multi-chain'} variant={'left'} />
      <NavItem label={'Accounts'} href={'#accounts'} variant={'left'} />
      <NavItem
        label={'Subscriptions'}
        href={'#subscriptions'}
        variant={'left'}
      />
    </>
  );

  const featuresLeftLinks = (
    <>
      <NavItem label={'Highlights'} href={'#highlights'} variant={'left'} />
      <NavItem label={'Screens'} href={'#screens'} variant={'left'} />
      <NavItem label={'Get Started'} href={'#get-started'} variant={'left'} />
    </>
  );

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout leftLinks={landingLeftLinks}>
              <Landing />
            </MainLayout>
          }
        />
        <Route
          path="/features"
          element={
            <MainLayout leftLinks={featuresLeftLinks}>
              <FeaturesPage />
            </MainLayout>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
