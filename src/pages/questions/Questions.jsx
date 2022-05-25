import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Input, Col, Row } from 'antd';
import { createQuestion, fetchQuestions } from '../../features/questions/questionReducer';
import TableQuestions from './TableQuestions';
import SearchTags from './SearchTags';
import { AuthGuard } from '../../components/AuthGuard/AuthGuard';
import { Navigation } from '../../components/Navigation/Navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  text: yup.string(),
  answer: yup.string(),
  tags: yup.array(),
})

function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const createQuestions = (data) => {
    let newId = 1;
    if (questions.length > 1) {
      const lastId = questions.reduce((prev, cur) => {
        if (prev.id > cur.id) {
          return prev.id;
        }
        return cur.id;
      });
      newId = lastId + 1;
    } else if (questions.length === 1) {
      newId = questions[0].id + 1;
    }
    const tags = data.tags?.split(' ');
    dispatch(createQuestion({ id: newId, text: data.text, answer: data.answer, tags: tags }));
    form.resetFields();
  };



  return (
    <>
      <Navigation />
      <SearchTags />
      <Row>
        <Col xs={24} md={{ span: 16, offset: 4 }}>
          <TableQuestions />
        </Col>
      </Row>
      <AuthGuard>



      {/*    валидация. для того чтобы сделать нужно прокинуть схему.*/}
      {/*  const schema = yup.object({*/}
      {/*  question: yup.string().required(),*/}
      {/*}).required();*/}
      {/*  const { register, handleSubmit, formState:{ errors } } = useForm({*/}
      {/*  resolver: yupResolver(schema)*/}
      {/*});*/}

      {/*  форму оборачиваем в провайдер*/}
      {/*  <form onSubmit={handleSubmit(onSubmit)}>*/}
      {/*  yup*/}
      {/*    <input {...register("question")} />*/}
      {/*    <p>{errors.question?.message}</p>*/}

      {/*    Обязательные: текст, ответ. (Придумать минимальную длину для них)*/}
      {/*    Optional: tag.*/}



        <div style={{ marginLeft: '26%', padding: '5px' }}>
          {/*<Form*/}
          {/*  name="addQuestions"*/}
          {/*  labelCol={{ span: 0 }}*/}
          {/*  wrapperCol={{ span: 14 }}*/}
          {/*  onFinish={createQuestions}*/}
          {/*  form={form}*/}
          {/*>*/}
            <Form
            name="addQuestions"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 14 }}
            onFinish={createQuestions}
            form={form}
          >
            <Form.Item label="Введите текст" name="text" >
              <TextArea rows={2} />
            </Form.Item>
              <p> {errors.text?.message} </p>
            <Form.Item label="Введите ответ" name="answer" >
              <TextArea rows={2} />
            </Form.Item>
              <p> {errors.answer?.message} </p>
            <Form.Item label="Введите тэги" name="tags" >
              <TextArea rows={2} />
            </Form.Item>
            {/*  <Form.Item label="Введите текст" name="text" >*/}
            {/*    <Input {...register("text")}/>*/}
            {/*  </Form.Item>*/}
            {/*  <p> {errors.text?.message} </p>*/}
            {/*  <Form.Item label="Введите ответ" name="answer" >*/}
            {/*    <Input {...register("answer")}/>*/}
            {/*  </Form.Item>*/}
            {/*  <p> {errors.answer?.message} </p>*/}
            {/*  <Form.Item label="Введите тэги" name="tags">*/}
            {/*    <Input {...register("tags")}/>*/}
            {/*  </Form.Item>*/}
            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
              <Button type="primary" htmlType="submit">
                Добавить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </AuthGuard>
    </>
  );
}

export default Questions;
