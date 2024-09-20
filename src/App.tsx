import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import ContactForm from './Components/ContactForm/ContactForm';
import Contract from './Components/Contract/Contract';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Contact Form Route */}
        <Route path="/contact" element={<ContactForm />} />

        {/* Contract and Privacy Policy Routes */}
        <Route path="/contract" element={<Contract />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;