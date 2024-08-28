import './LogInModal.scss';
import React from 'react';
import { Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormItem } from 'react-hook-form-antd';
import * as z from 'zod';
import { ModalComponent } from '../Modal/ModalComponent';

const schemaLogin = z.object({
  loginEmail: z
    .string()
    .email({ message: 'Invalid email' })
    .min(1, { message: 'Required' }),
  loginPassword: z.string().min(1, { message: 'Required' }),
});

interface LoginModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleLoginSubmit: (values: any) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isModalOpen,
  handleCancel,
  handleLoginSubmit,
}) => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schemaLogin),
  });

  return (
    <ModalComponent
      isModalOpen={isModalOpen}
      handleCancel={handleCancel}
      handleOk={handleSubmit(handleLoginSubmit)}
      title="Login Modal"
    >
      <Form
        name="log-in-form"
        onFinish={handleSubmit(handleLoginSubmit)}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, borderRadius: 120 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <FormItem control={control} name="loginEmail" label="" required>
          <Input
            type="loginEmail"
            placeholder="Enter email"
            autoComplete="on"
          />
        </FormItem>

        <FormItem control={control} name="loginPassword" label="" required>
          <Input.Password
            type="loginPassword"
            name="loginPassword"
            placeholder="Enter password"
            autoComplete="on"
          />
        </FormItem>
      </Form>
    </ModalComponent>
  );
};
