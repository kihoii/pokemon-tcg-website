import './CreateAuctionPage.scss';
import pic from './created-auction.jpg';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

import { FormItem } from 'react-hook-form-antd';
import { useForm } from 'react-hook-form';

type FieldType = {
    cardId: string;
    cardName: string;
    startPrice: number;
    minStep: number;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const CreateAuctionPage = () => {
  const { control, handleSubmit } = useForm();
  return (
    <div>
      <section id="main-section">
        <div className="left-container">
        <h1>Here you can create auctions </h1>
          <p className="page-text">
          Sell your collectible cards simply and quickly - set a minimum bid and create an auction          </p>
          <img className="image-pokemon" src={pic} alt="placeholder" />
        </div>
        <div className="right-container">
          <p className="page-text">
          Enter the necessary data to create an auction          </p>
          <Form
            name="sign-up-form"
            onFinish={handleSubmit((data) => {
              console.log(data);
            })}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, borderRadius: 120 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <FormItem control={control} name="cardId" label="">
              <Input
                type="number"
                placeholder="Please input id of your card!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={control} name="cardName" label="">
              <Input
                type=""
                placeholder="Please input name of your card!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={control} name="startPrice" label="">
              <Input
                type="number"
                placeholder="Please input start price!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={control} name="minStep" label="">
              <Input
                type="number"
                placeholder="Please input min step!"
                autoComplete="on"
              />
            </FormItem>

            <Form.Item>
              <Button className="button" type="primary" htmlType="submit">
                Create auction
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
};






