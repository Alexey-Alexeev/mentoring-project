import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../features/questions/questionReducer';
import userInfoReducer from '../features/userInfo/userInfoReducer';
import authReducer from "../features/auth/authReducer";

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
    questions: questionReducer,
    users: authReducer,
  },
});
