import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

// New Service Pages
import ElectronicsRepair from './pages/services/ElectronicsRepair';
import NetworkingSolutions from './pages/services/NetworkingSolutions';
import CctvInstallation from './pages/services/CctvInstallation';
import ElectricalServices from './pages/services/ElectricalServices';
import TechnicalSupport from './pages/services/TechnicalSupport';
import SolarSolutions from './pages/services/SolarSolutions';

// New Location Pages
import RiyadhLocation from './pages/locations/RiyadhLocation';
import KochiLocation from './pages/locations/KochiLocation';
import DubaiLocation from './pages/locations/DubaiLocation';

// Legal & Blog
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import BlogIndex from './pages/blog/BlogIndex';
import CctvCostArticle from './pages/blog/CctvCostArticle';
import NetworkTroubleshootingArticle from './pages/blog/NetworkTroubleshootingArticle';
import ElectronicsRepairArticle from './pages/blog/ElectronicsRepairArticle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="locations" element={<Locations />} />
          <Route path="contact" element={<Contact />} />

          {/* Service Pages */}
          <Route path="services/electronics-repair" element={<ElectronicsRepair />} />
          <Route path="services/networking-solutions" element={<NetworkingSolutions />} />
          <Route path="services/cctv-installation" element={<CctvInstallation />} />
          <Route path="services/electrical-services" element={<ElectricalServices />} />
          <Route path="services/technical-support" element={<TechnicalSupport />} />
          <Route path="services/solar-solutions" element={<SolarSolutions />} />

          {/* Location Pages */}
          <Route path="locations/riyadh" element={<RiyadhLocation />} />
          <Route path="locations/kochi" element={<KochiLocation />} />
          <Route path="locations/dubai" element={<DubaiLocation />} />

          {/* Insights & Legal */}
          <Route path="insights" element={<BlogIndex />} />
          <Route path="insights/cctv-installation-cost" element={<CctvCostArticle />} />
          <Route path="insights/network-troubleshooting" element={<NetworkTroubleshootingArticle />} />
          <Route path="insights/electronics-repair-guide" element={<ElectronicsRepairArticle />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
