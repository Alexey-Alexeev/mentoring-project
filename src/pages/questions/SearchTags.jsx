import React from 'react';
import { Input, Table, Typography, Modal, Tag, Button } from 'antd';
const SeacrhTags = () => {
  return (
    <div>
      <Input autoFocus placeholder="Введите тэг для поиска">
        <Button>Поиск</Button>
      </Input>
    </div>
  );
};

export default SeacrhTags;
