import React from 'react';
import { Input, Button, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { searchTags } from '../../features/questions/questionReducer';
import {useSearchParams} from "react-router-dom";

const SearchTags = () => {
  const questions = useSelector((state) => state.questions.questions);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    const tags = e.target.value;
    if (tags) {
      setSearchParams({ tags });
    } else {
      setSearchParams({});
    }
  }
  const searchTag = (e) => {
    dispatch(searchTags(e.tags));
  };
  return (
    <div>
      <Form name="searchTag" onFinish={searchTag}>
          <Form.Item wrapperCol={{ offset: 1, span: 8 }} name="tags">
        <Input autoFocus placeholder="Введите тэг для поиска" onChange={handleSearch}/>
          </Form.Item>
        <Form.Item wrapperCol={{ offset: 1, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Поиск
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SearchTags;
