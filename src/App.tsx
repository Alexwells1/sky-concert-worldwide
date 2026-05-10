import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"         element={<HomePage />}     />
          <Route path="/about"    element={<AboutPage />}    />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/why-us"   element={<WhyUsPage />}   />
 <Route path="/contact"  element={<ContactPage />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
