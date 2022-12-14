import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { HashRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner';
import './App.scss';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const AboutCompanyPage = lazy(() => import('./pages/AboutCompanyPage/AboutCompanyPage'));
const OurServicesPage = lazy(() => import('./pages/OurServicesPage/OurServicesPage'));
const SingleProductPage = lazy(() => import('./pages/SingleProductPage/SingleProductPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const PolicyPage = lazy(() => import('./pages/PolicyPage/PolicyPage'));
const Page404 = lazy(() => import('./pages/404/404'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <AnimatedSwitch />
      </Suspense>
    </Router>
  );
}

const AnimatedSwitch = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname === '/notfound') {
      setDisplayLocation(location);
    } else if (location !== displayLocation) setTransistionStage('fadeOut');
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransistionStage('fadeIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div className={`${transitionStage}`} onAnimationEnd={handleAnimationEnd}>
      <Routes location={displayLocation}>
        <Route path="/" element={<MainPage />} />
        <Route path="aboutcompany" element={<AboutCompanyPage />} />
        <Route path="services" element={<OurServicesPage />} />
        <Route path="services/:id" element={<SingleProductPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="policy" element={<PolicyPage />} />
        <Route path="notfound" element={<Page404 />} />
        <Route path="*" element={<Navigate to="notfound" replace />} />
      </Routes>
    </div>
  );
};

export default App;
