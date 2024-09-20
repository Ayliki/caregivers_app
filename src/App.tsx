import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const LandingPage = lazy(() => import('./Components/LandingPage/LandingPage'));
const ContactForm = lazy(() => import('./Components/ContactForm/ContactForm'));
const Contract = lazy(() => import('./Components/Contract/Contract'));
const PrivacyPolicy = lazy(() => import('./Components/PrivacyPolicy/PrivacyPolicy'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;