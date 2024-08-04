import { Hero } from './components/Hero/Hero';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { MiddleBanner } from './components/MiddleBanner/MiddleBanner';
import { SubscribeWidget } from './components/SubscribeWidget/SubscribeWidget';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div id="home-page">
      <Hero />
      <MiddleBanner />
      <HowItWorks />
      <SubscribeWidget />
    </div>
  );
};
