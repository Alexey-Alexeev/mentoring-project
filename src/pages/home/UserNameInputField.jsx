import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { setName } from '../../features/userInfo/userInfoReducer';



function UserNameInputField() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    dispatch(setName(e.userName));
    form.resetFields();
  };

  return (
    <Form
      name="userName"
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 3 }}
      form={form}
      onFinish={submitForm}
    >
      <Form.Item label="Введите userName" name="userName">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 3, span: 5 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
export default UserNameInputField;
