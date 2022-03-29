import React from 'react';
import { Link } from 'react-router-dom';
import './formAuthorization.css';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

function FormAuthorization() {
  const handlerButton = (e) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <nav>
          <Link to="/Home" style={{ marginLeft: '5px' }}>
            Home
          </Link>
          <Link to="/questions" style={{ marginLeft: '5px' }}>
            Questions
          </Link>
        </nav>
      </div>
      <div className="header">
        <div className="form">
          <Form
            name="authorization"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onFinish={handlerButton}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите Ваш email',
                },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите Ваш пароль',
                },
                { min: 8 },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default FormAuthorization;

// 1)
// Поля не должны гулять. Выравнить
// 2)
// Выравняем инпуты. Чтобы были одинаковой ширины и строго друг под другом. Email и Password разной ширины, но выравнены под одним краем
// 3)
// Поменять цвет ошибки и сделать меньшим размером (6px или 8px). Текст ошибки строго под input.
// 4)
// Проверка e-mail через стороннюю библиотеку
// 5)
// ПОпробовать библиотеку ant
// if (/[\w0-9]+@[\w0-9]+\.[\w]{2,3}/.test(email) && password.length >= 8) {
//     console.log(userInfo);
// }
