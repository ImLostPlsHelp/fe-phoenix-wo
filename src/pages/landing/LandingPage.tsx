import HeroSection from '../../components/sections/HeroSection.tsx';
import Navbar from '../../components/layout/public/Navbar.tsx';
import PartnerSection from '../../components/sections/PartnerSection.tsx';
import CardsSection from '../../components/sections/CardsSection.tsx';
import PricePlanSection from '../../components/sections/PricePlanSection.tsx';
import TestimonySection from '../../components/sections/TestimonySection.tsx';
import ContactSection from '../../components/sections/ContactSection.tsx';
import Footer from '../../components/layout/public/Footer.tsx';

function LandingPage() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerSection />
      <CardsSection />
      <TestimonySection />
      <PricePlanSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;