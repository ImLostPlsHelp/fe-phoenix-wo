import HeroSection from '../../components/sections/HeroSection.tsx';
import Navbar from '../../components/layout/public/Navbar.tsx';
import PartnerSection from '../../components/sections/PartnerSection.tsx';

function LandingPage() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <PartnerSection/>
    </>
  )
}

export default LandingPage;