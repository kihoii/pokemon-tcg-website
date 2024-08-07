import './HowItWorks.scss';
import cart from './assets/cart.svg';
import folder from './assets/folder.svg';
import chat from './assets/chat.svg';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container">
      <div className="headline">
        <h3>How It Works</h3>
        <p>Find out how to get started</p>
      </div>
      <div className="info-cards-block">
        <div className="info-card">
          <div className="info-card-image">
            <img src={cart} alt="" />
          </div>
          <div className="info-card-title">Buy New Cards</div>
          <div className="info-card-text">
            Search for cards that you don't have
          </div>
        </div>
        <div className="info-card">
          <div className="info-card-image">
            <img src={folder} alt="" />
          </div>
          <div className="info-card-title">Keep Track Of Your Collection</div>
          <div className="info-card-text">
            See the cards you already have or you wish about
          </div>
        </div>
        <div className="info-card">
          <div className="info-card-image">
            <img src={chat} alt="" />
          </div>
          <div className="info-card-title">Find Out The News</div>
          <div className="info-card-text">Latest news from Pokemon world</div>
        </div>
      </div>
    </section>
  );
};
