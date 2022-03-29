import React, { useState } from 'react';
import { Descriptions, Button } from 'antd';
import FormEditQuestion from './formEditQuestion';

// eslint-disable-next-line react/prop-types
function ListQuestions({ question }) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const editQuestion = () => {
    setIsVisibleModal(true);
  };
  // const removeQuestion = (id) => {
  //   dispatch(deleteQuestion(id));
  // };
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div style={{ marginLeft: '20px' }}>
      {/* eslint-disable-next-line react/prop-types */}
      <Descriptions title={`Текст вопроса: ${question.text}`}>
        {/* eslint-disable-next-line react/prop-types */}
        <Descriptions.Item label="Ответ">{question.answer}</Descriptions.Item>
      </Descriptions>
      {/* eslint-disable-next-line react/prop-types */}
      <Button type="primary" danger onClick={editQuestion}>
        Редактирование
      </Button>
      {isVisibleModal && (
        <FormEditQuestion onClose={() => setIsVisibleModal(false)} question={question} />
      )}
    </div>
  );
}

export default ListQuestions;
