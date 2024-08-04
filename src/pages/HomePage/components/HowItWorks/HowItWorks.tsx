import './HowItWorks.scss';
import cart from './assets/cart.svg';
import folder from './assets/folder.svg';
import chat from './assets/chat.svg';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container">
      <div className="info-card">
        <div className="info-card-image">
          <img src={cart} alt="" />
        </div>
        <div className="info-card-title">Покупай Новые Карточки</div>
        <div className="info-card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          necessitatibus molestiae distinctio aliquid voluptatem
        </div>
      </div>
      <div className="info-card">
        <div className="info-card-image">
          <img src={folder} alt="" />
        </div>
        <div className="info-card-title">Отслеживай Свою Коллекцию</div>
        <div className="info-card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </div>
      <div className="info-card">
        <div className="info-card-image">
          <img src={chat} alt="" />
        </div>
        <div className="info-card-title">Узнавай Новости</div>
        <div className="info-card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </div>
    </section>
  );
};
