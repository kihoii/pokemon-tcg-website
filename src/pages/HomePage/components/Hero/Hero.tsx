import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Hero.scss';
import banner from './assets/hero-banner.png';

export const Hero = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/sign-up');
  };

  return (
    <section className="container" id="hero">
      <div className="hero-info">
        <div className="hero-headline">
          <h1>Pokémon TCG</h1>
          <h2>Collect, buy and exchange!</h2>
        </div>
        <Button type="primary" onClick={handleJoinNow}>
          Join now
        </Button>
        <div className="add-info">
          <div className="info-block">
            <p className="info-number">240k+</p>
            <p className="info-type">Total Sale</p>
          </div>
          <div className="info-block">
            <p className="info-number">240k+</p>
            <p className="info-type">Total Sale</p>
          </div>
          <div className="info-block">
            <p className="info-number">240k+</p>
            <p className="info-type">Total Sale</p>
          </div>
        </div>
      </div>
      <div className="hero-banner">
        <img src={banner} alt="hero-banner" />
      </div>
    </section>
  );
};
