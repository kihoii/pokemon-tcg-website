import { Hero } from './components/Hero/Hero';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { MiddleBanner } from './components/MiddleBanner/MiddleBanner';
import { SubscribeWidget } from './components/SubscribeWidget/SubscribeWidget';
import { UserRating } from './components/UserRating/UserRating';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div id="home-page">
      <Hero />
      <UserRating />
      <MiddleBanner />
      <HowItWorks />
      <SubscribeWidget />
    </div>
  );
};
