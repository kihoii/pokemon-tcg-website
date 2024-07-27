import './CreateUserAccountPage.scss';
import placeholder  from './Placeholder.png';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

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


export const CreateUserAccountPage = () => {
    return (
        <div> 
            <section id="main-section">
                <div className='left-container'>
                <img src={placeholder} alt="placeholder" />
                </div>
                <div className='right-container'>
                    <h1>Создать аккаунт</h1>
                    <h3 className='grey'>Добро пожаловать! Введите ваши данные и начните собирать свою коллекцию покемонов! Надеемся вам понравится</h3>
                    <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 , borderRadius: 120}}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input placeholder="Username"/>
                    </Form.Item>

                    <Form.Item<FieldType>
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email Address!' }]}
                    >
                    <Input placeholder="Email Address"/>
                    </Form.Item>

                    <Form.Item<FieldType>
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input.Password placeholder="Password"/>
                    </Form.Item>

                    <Form.Item<FieldType>
                    name="passwordConfirm"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input.Password placeholder="Confirm Password"/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button className='button' type="primary" htmlType="submit">
                        Зарегестрироваться
                    </Button>
                    </Form.Item>
                </Form>
                </div>
                
            </section>
        </div>
    )
}