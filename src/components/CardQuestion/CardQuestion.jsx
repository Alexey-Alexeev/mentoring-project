import React, {useEffect} from 'react';
import SingleQuestion from "./SingleQuestion";
import CommentQuestion from "../CommentQuestion/CommentQuestion";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchQuestion,
} from '../../features/questions/questionReducer';
import {Navigation} from "../Navigation/Navigation";
import {getUser} from "../../features/auth/authReducer";

const CardQuestion = () => {
    const {questionId} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuestion(questionId))
    }, [questionId]);
    useEffect(() => {
        dispatch(getUser())
    }, [])
    const question = useSelector((state) => state.questions.question);
    const user = useSelector((state) => state.users.currentUser);
    return (
        <div>
            <Navigation />
            <h1 style={{textAlign: 'center'}}>Карточка вопроса</h1>
            <SingleQuestion data={question}/>
            <CommentQuestion />
        </div>
    );
};

export default CardQuestion;