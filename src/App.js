import React from 'react';
import Footer from './pages/common/footer';
import Header from './pages/common/header';
import FeatureView from './pages/landing/feature-section';
import IntegrationView from './pages/landing/integration-section';
import LandingView from './pages/landing/landing-section';
import PartnerView from './pages/landing/partner-section';
import RecommendationView from './pages/landing/recommendation-section';

const App = () => {
  return (
    <div>
      <Header />
      <LandingView />
      <PartnerView />
      {/* <FeatureView />
      <RecommendationView /> */}
      <IntegrationView />
      <Footer />
    </div>
  )
}
export default App;