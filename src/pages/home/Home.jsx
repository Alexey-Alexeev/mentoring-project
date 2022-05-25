import React from 'react';
import OutputUserName from './OutputUserName';
import UserNameInputField from './UserNameInputField';
import { Navigation } from '../../components/Navigation/Navigation';
import { useSelector } from 'react-redux';

function Home() {
  const name = useSelector((state) => state.userInfo.name);
  return (
    <div className="main">
      <Navigation />
      <h1 style={{ textAlign: 'center' }}>HOME</h1>
      <OutputUserName />
        {!name && <UserNameInputField />}
    </div>
  );
}

export default Home;
