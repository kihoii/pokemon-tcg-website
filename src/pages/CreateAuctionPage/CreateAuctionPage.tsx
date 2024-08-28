import './CreateAuctionPage.scss';
import pic from './created-auction.jpg';
import type { FormProps } from 'antd';
import { Button, Form, Input, message } from 'antd';
import * as z from 'zod';
import { FormItem } from 'react-hook-form-antd';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CreateAuctionRequest } from '../../models/RequestModels/CreateAuctionRequest';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { AddAuction } from '../../api/helpers';

const schemaSignUp = z.object({
  cardId: z.string().min(1, { message: 'Required' }),
  cardName: z.string().min(1, { message: 'Required' }),
  startPrice: z.coerce.number().gte(1, { message: 'Required' }),
  minStep: z.coerce.number().min(0.1, { message: 'Required' }),
});

export const CreateAuctionPage = () => {
  let request: CreateAuctionRequest;
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'loading';

  const {
    control: controlAddAuction,
    handleSubmit: handleAddAuctionSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schemaSignUp),
  });

  const mutation = useMutation(() => AddAuction(request));

  const onFinish: FormProps['onFinish'] = (values) => {
    request = {
      cardId: values['cardId'],
      cardName: values['cardName'],
      startPrice: values['startPrice'],
      minStep: values['minStep'],
    };
    mutation.mutate();
  };

  useEffect(() => {
    if (mutation.isLoading) {
      messageApi.open({
        key,
        type: 'loading',
        content: 'Creating auction...',
        duration: 0,
      });
    }
    if (mutation.isSuccess) {
      form.resetFields();
      reset();
      messageApi.open({
        key,
        type: 'success',
        content: 'Auction created successfully!',
        duration: 2,
      });
    }
    if (mutation.isError) {
      messageApi.open({
        key,
        type: 'error',
        content: 'Failed to create auction. Please try again.',
        duration: 2,
      });
    }
  }, [
    mutation.isLoading,
    mutation.isSuccess,
    mutation.isError,
    form,
    messageApi,
    reset,
  ]);

  return (
    <div>
      {contextHolder}
      <section id="main-section">
        <div className="left-container">
          <h1>Here you can create auctions </h1>
          <p className="page-text">
            Sell your collectible cards simply and quickly - set a minimum bid
            and create an auction{' '}
          </p>
          <img className="image-pokemon" src={pic} alt="placeholder" />
        </div>
        <div className="right-container">
          <p className="page-text">
            Enter the necessary data to create an auction{' '}
          </p>
          <Form
            form={form}
            name="sign-up-form"
            onFinish={handleAddAuctionSubmit(onFinish)}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, borderRadius: 120 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <FormItem control={controlAddAuction} name="cardId" label="">
              <Input
                placeholder="Please input id of your card!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={controlAddAuction} name="cardName" label="">
              <Input
                placeholder="Please input name of your card!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={controlAddAuction} name="startPrice" label="">
              <Input
                type="number"
                placeholder="Please input start price!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={controlAddAuction} name="minStep" label="">
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
