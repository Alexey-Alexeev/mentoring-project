import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Table, Typography, Modal, Tag, Button } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import {
  deleteQuestion,
  fetchQuestions,
  updateQuestion,
} from '../../features/questions/questionReducer';

function TableQuestions() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const { TextArea } = Input;
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Текст',
      dataIndex: 'text',
    },
    {
      title: 'Ответ',
      dataIndex: 'answer',
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Тэги',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Input
              autoFocus
              placeholder="Введите тэг для поиска"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Поиск
            </Button>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined style={{ fontSize: '24px', color: '#08c' }} />;
      },
      onFilter: (value, record) => {
        const lowerCaseTags = record.tags.map((item) => item.toLowerCase());
        return lowerCaseTags.find((item) => {
          return item.includes(value.toLowerCase());
        });
      },
    },
    {
      title: 'Действия',
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                editQuestion(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                removeQuestion(record.id);
              }}
              style={{ color: 'red', marginLeft: '10px' }}
            />
          </>
        );
      },
    },
  ];

  const data = questions.map((question) => {
    return {
      key: question.id,
      id: question.id,
      text: question.text,
      answer: question.answer,
      tags: question.tags,
      delete: 'Удалить',
    };
  });
  const removeQuestion = (id) => {
    Modal.confirm({
      title: 'Вы уверены, что хотите удалить вопрос?',
      okText: 'Да',
      okType: 'danger',
      onOk: () => {
        dispatch(deleteQuestion(id));
      },
      cancelText: 'Отмена',
    });
  };
  const editQuestion = (record) => {
    setIsEditing(true);
    setEditingQuestion({ ...record });
  };
  return (
    <>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            total: 15,
            defaultPageSize: '2',
            showSizeChanger: true,
            pageSizeOptions: [2, 7, 10, 12, 15, 20],
            onChange: (page, pageSize) => {
              dispatch(fetchQuestions(page - 1));
            },
          }}
        />
        <Modal
          title="Редактирование вопроса"
          visible={isEditing}
          onCancel={() => {
            setIsEditing(false);
            setEditingQuestion(null);
          }}
          onOk={() => {
            const { id, text, answer, tags } = editingQuestion;
            dispatch(updateQuestion({ id, text, answer, tags }));
            setIsEditing(false);
            setEditingQuestion(null);
          }}
          okText="Сохранить"
          cancelText="Отмена"
        >
          <TextArea
            rows={4}
            value={editingQuestion?.text}
            onChange={(e) => {
              setEditingQuestion((prev) => {
                return { ...prev, text: e.target.value };
              });
            }}
          />
          <TextArea
            rows={4}
            value={editingQuestion?.answer}
            onChange={(e) => {
              setEditingQuestion((prev) => {
                return { ...prev, answer: e.target.value };
              });
            }}
          />
          <TextArea
            rows={4}
            value={editingQuestion?.tags}
            onChange={(e) => {
              setEditingQuestion((prev) => {
                return { ...prev, tags: e.target.value };
              });
            }}
          />
        </Modal>
      </div>
    </>
  );
}

export default TableQuestions;


