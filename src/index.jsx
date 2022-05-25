import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import FormAuthorization from './pages/signIn/SignIn';
import Home from './pages/home/Home';
import store from './app/store';
import Questions from './pages/questions/Questions';
import FormRegistration from './pages/signUp/SignUp';
import { SignOut } from './pages/signOut/SignOut';
import { CurrentUser } from './components/CurrentUser/CurrentUser';
import CardQuestion from "./components/CardQuestion/CardQuestion";
import SingleQuestion from "./components/CardQuestion/SingleQuestion";


ReactDOM.render(
  <Provider store={store}>
    {/*<CurrentUser>*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormRegistration />} />
          <Route path="/signIn" element={<FormAuthorization />} />
          <Route path="/signUp" element={<FormRegistration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/cardQuestion/:questionId" element={<CardQuestion />} />
          <Route path="/signOut" element={<SignOut />} />

        </Routes>
      </BrowserRouter>
    {/*</CurrentUser>*/}
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
