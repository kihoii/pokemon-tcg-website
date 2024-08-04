import { Button, Form, Input } from 'antd';
import './SubscribeInput.scss';
import envelope from './assets/EnvelopeSimple.svg';
import { FormItem } from 'react-hook-form-antd';
import { useForm } from 'react-hook-form';

export const SubscribeInput = () => {
  const { control, handleSubmit } = useForm();

  return (
    <div className="subscribe-input">
      <Form
        name="email-subscribe"
        onFinish={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormItem control={control} name="email" label="">
          <Input
            type="email"
            placeholder="Enter your email here"
            autoComplete="on"
          />
        </FormItem>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            <img src={envelope} alt="" />
            Subscribe
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
