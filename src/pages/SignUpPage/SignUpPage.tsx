import './SignUpPage.scss';
import placeholder from './Ivysaur.png';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

import { FormItem } from 'react-hook-form-antd';
import { useForm } from 'react-hook-form';

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const SignUpPage = ({ name }: { name: string }) => {
  const { control, handleSubmit } = useForm();
  return (
    <div>
      <section id="main-section">
        <div className="left-container">
          <img className="image-pokemon" src={placeholder} alt="placeholder" />
        </div>
        <div className="right-container">
          <h1>Create an account</h1>
          <h2 className="text">
            Welcome! Enter your details and start collecting your Pokemon
            collection! We hope you enjoy it!
          </h2>
          <Form
            name={name}
            onFinish={handleSubmit((data) => {
              console.log(data);
            })}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, borderRadius: 120 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <FormItem control={control} name="username" label="">
              <Input
                type="Username"
                placeholder="Please input your username!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={control} name="email" label="">
              <Input
                type="email"
                placeholder="Please input your Email Address!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={control} name="password" label="">
              <Input
                type=""
                placeholder="Please input your password!"
                autoComplete="on"
              />
            </FormItem>

            <FormItem control={control} name="passwordConfirm" label="">
              <Input
                type="password"
                placeholder="Please input your password!"
                autoComplete="on"
              />
            </FormItem>

            <Form.Item>
              <Button className="button" type="primary" htmlType="submit">
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
};
