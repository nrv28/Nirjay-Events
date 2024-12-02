import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Header from './components/HeaderFooter/NavbarComp';
import ContactPage from './pages/ContactPage';
import PartnerSearch from './components/Partners/PartnerSearch';
import PartnersDisplay from './components/Partners/PartnersDisplay';
import IndividualDisplay from './components/Partners/IndividualDisplay';
import UserProfile from './components/Login&Profile/UserProfileComp';
import PartnerProfile from './components/Login&Profile/PartnerProfileComp';
import PartnerAdd from './components/Adminn/PartnerAdd';
import LoginComp from './components/Login&Profile/LoginComp';
import SignupComp from './components/Login&Profile/SignUpComp';
import ProfileRedirect from './components/Login&Profile/ProfileRedirect';
import Review from './components/Other/ReviewForm';
import ServicesPage from './pages/ServicePage';
import AboutPage from './pages/AboutPage'
import ForgotPassword from './components/Login&Profile/ForgotPasswordComp';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partnersearch" element={<PartnerSearch />} />
          <Route path="/city" element={<PartnersDisplay />} />
          <Route path="/individualdisplay" element={<IndividualDisplay />} />
          <Route path="/profileredirect" element={<ProfileRedirect/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="/partnerprofile" element={<PartnerProfile />} />
          <Route path="/login" element={<LoginComp />} />
          <Route path="/signup" element={<SignupComp />} />
          <Route path="/review" element={<Review />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/PartnerAdd" element={<PartnerAdd />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
