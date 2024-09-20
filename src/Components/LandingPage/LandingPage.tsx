import React from 'react';
import HeroSection from '../Herosection/Herosection';
import ContactForm from '../ContactForm/ContactForm';
import Navbar from '../Navbar/Navbar';
import { Container } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <HeroSection
          title="Найдите идеальную сиделку"
          subtitle="Соединяем сиделок с семьями, нуждающимися в профессиональном уходе."
          buttonText="Начать"
        />
        <ContactForm />
      </Container>
    </div>
  );
};

export default LandingPage;