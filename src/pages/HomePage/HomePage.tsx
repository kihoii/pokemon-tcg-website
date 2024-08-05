import { Hero } from './components/Hero/Hero';
import { UserRating } from './components/UserRating/UserRating';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div id="home-page">
      <Hero />
      <UserRating />
    </div>
  );
};
