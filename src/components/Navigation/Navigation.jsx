import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
  MailOutlined,
  LogoutOutlined,
  KeyOutlined,
  QuestionCircleOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const nav = [
    { name: 'Home', icon: <HomeOutlined />, to: '/Home' },
    { name: 'Questions', icon: <QuestionCircleOutlined />, to: '/Questions' },
    { name: 'SignOut', icon: <LogoutOutlined />, to: '/SignOut' },
    { name: 'SignUp', icon: <LogoutOutlined />, to: '/SignUp' },
  ];
  const location = useLocation();
  const currentLocation = location.pathname.slice(1);
  // const email = useSelector((state) => state.users.currentUser.email);
  return (
    <Menu selectedKeys={[currentLocation]} mode="horizontal" style={{ margin: '0 20%' }}>
      {nav.map((item) => {
        return (
          <Menu.Item key={item.name} icon={item.icon}>
            <Link to={item.to} style={{ marginLeft: '5px' }}>
              {item.name}
            </Link>
          </Menu.Item>
        );
      })}
      {/*{email && (*/}
      {/*    <Menu.Item>Email: {email}</Menu.Item>*/}
      {/*)}*/}
    </Menu>

  );
};
