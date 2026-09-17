import HeroSection from '../../components/sections/HeroSection.tsx';
import Navbar from '../../components/layout/public/Navbar.tsx';
import PartnerSection from '../../components/sections/PartnerSection.tsx';
import CardsSection from '../../components/sections/CardsSection.tsx';
import PricePlanSection from '../../components/sections/PricePlanSection.tsx';

function LandingPage() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerSection />
      <CardsSection />
      <PricePlanSection />
    </>
  );
}

export default LandingPage;