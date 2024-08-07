import { SubscribeInput } from '../../../../components/SubscribeInput/SubscribeInput';
import './SubscribeWidget.scss';
import banner from './assets/subscribe-widget-banner.png';

export const SubscribeWidget = () => {
  return (
    <section id="subscribe-widget" className="container">
      <img
        src={banner}
        className="subscribe-widget-banner"
        alt="subscribe-widget-banner"
      />
      <div className="subscribe-widget-info">
        <div className="headline">
          <h3>Join our weekly digest</h3>
          <p>
            Get exclusive promotions & updates <br />
            straight to your inbox.
          </p>
        </div>
        <SubscribeInput name="widget-email" />
      </div>
    </section>
  );
};
