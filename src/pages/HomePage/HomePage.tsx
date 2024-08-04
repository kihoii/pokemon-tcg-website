import { Hero } from './components/Hero/Hero';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { SubscribeWidget } from './components/SubscribeWidget/SubscribeWidget';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div id="home-page">
      <Hero />
      <HowItWorks />
      <SubscribeWidget />
    </div>
  );
};
