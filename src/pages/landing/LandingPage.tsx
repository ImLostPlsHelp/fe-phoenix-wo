import HeroSection from '../../components/sections/HeroSection.tsx';
import Navbar from '../../components/layout/public/Navbar.tsx';
import PartnerSection from '../../components/sections/PartnerSection.tsx';
import PricePlanSection from '../../components/sections/PricePlanSection.tsx';

function LandingPage() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <PartnerSection/>
    <PricePlanSection/>
    </>
  )
}

export default LandingPage;