import React from 'react';
import { useSelector } from 'react-redux';
import { Descriptions } from 'antd';

function OutputUserName() {
  const name = useSelector((state) => state.userInfo.name);

  return (
    <div className="userInfo">
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">{name}</Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default OutputUserName;
