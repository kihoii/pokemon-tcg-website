import './SignUpPage.scss';
import placeholder from './Ivysaur.png';
import type { FormProps } from 'antd';
import { Button, DatePicker, Form, Input } from 'antd';
import { FormItem } from 'react-hook-form-antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs, { type Dayjs } from 'dayjs';
import * as z from 'zod';
import { useMutation } from 'react-query';
import { addUser } from '../../api/helpers';
import { SignUpRequest } from '../../models/RequestModels/SignUpRequest';

const phoneRegExp = new RegExp('^[(][0-9]{3}[)][0-9]{7}$');

const schema = z.object({
  name: z
    .string()
    .min(1, { message: 'Required' })
    .max(15, { message: 'Username should be less than 15 characters' }),
  email: z.string({ message: 'Required' }),
  phone: z.string().regex(phoneRegExp, {
    message: 'Required',
  }),
  address: z.string({ message: 'Required' }),
  birthDate: z.instanceof(dayjs as unknown as typeof Dayjs, {
    message: 'Required',
  }),
  password: z.string().min(1, { message: 'Required' }),
  passwordConfirm: z.string().min(1, { message: 'Required' }),
});

export const SignUpPage = () => {
  const mutation = useMutation(() => addUser(user));
  const { control, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  let user: SignUpRequest;

  const onFinish: FormProps['onFinish'] = (values) => {
    user = {
      name: values['name'],
      email: values['email'],
      phone: values['phone'],
      address: values['address'],
      birthDate: values['birthDate'].format('YYYY-MM-DD'),
      password: values['password'],
    };
    console.log('Success:', user);
    mutation.mutate();
  };

  return (
    <section id="sign-up-page">
      <div className="container">
        <h2>Create an account</h2>
        <div className="sign-up-box">
          <img className="left-banner" src={placeholder} alt="placeholder" />
          <div className="right-container">
            <p className="text">
              Welcome! Enter your details and start your Pokemon collection!
              <br /> We hope you enjoy it!
            </p>
            <Form
              name="sign-up-form"
              onFinish={handleSubmit(onFinish)}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600, borderRadius: 120 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <FormItem control={control} name="name" label="">
                <Input
                  placeholder="Enter username"
                  autoComplete="on"
                  maxLength={16}
                />
              </FormItem>

              <FormItem control={control} name="email" label="" required>
                <Input
                  type="email"
                  placeholder="Enter email"
                  autoComplete="on"
                />
              </FormItem>

              <FormItem control={control} name="phone" label="">
                <Input placeholder="Enter phone" autoComplete="on" />
              </FormItem>

              <FormItem control={control} name="address" label="" required>
                <Input
                  placeholder="Enter where are you from"
                  autoComplete="on"
                />
              </FormItem>

              <FormItem
                control={control}
                name="birthDate"
                label="Date Of Birth"
                required
              >
                <DatePicker />
              </FormItem>

              <FormItem control={control} name="password" label="" required>
                <Input.Password
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  autoComplete="on"
                />
              </FormItem>

              <FormItem
                control={control}
                name="passwordConfirm"
                label=""
                required
              >
                <Input.Password
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="on"
                />
              </FormItem>

              <Form.Item>
                <Button className="button" type="primary" htmlType="submit">
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
