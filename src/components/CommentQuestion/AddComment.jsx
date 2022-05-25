import React from 'react';
import {Button, Form, Input} from "antd";

const AddComment = ({ onChange, onSubmit, submitting, value }) => {
    const { TextArea } = Input;
    return (
        <>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    Add Comment
                </Button>
            </Form.Item>
        </>
)}

export default AddComment;