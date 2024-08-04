import { Button, Input } from 'antd';
import './SubscribeInput.scss';
import envelope from './assets/EnvelopeSimple.svg';

export const SubscribeInput = () => {
  return (
    <div className="subscribe-input">
      <Input type="email" placeholder="Enter your email here" />
      <Button type="primary">
        <img src={envelope} alt="" />
        Subscribe
      </Button>
    </div>
  );
};
