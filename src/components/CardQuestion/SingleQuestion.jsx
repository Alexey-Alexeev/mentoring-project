import React from 'react';
import { Descriptions } from 'antd';

const SingleQuestion = ({ data }) => {

    return (
        <div>
            <Descriptions title={`Вопрос: ${data.id}. ${data.text}`} className='single-question'>
                <Descriptions.Item label="Ответ">{data.answer}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};

export default SingleQuestion;