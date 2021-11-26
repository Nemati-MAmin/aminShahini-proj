import React, { useContext, useRef } from 'react';
import './Login.css';
import { FaTable, FaUserCircle } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';
import { loginAPI } from '../../LoginAPi';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { dispatch } = useContext(AuthContext);

  const formHandler = (e) => {
    e.preventDefault();
    const data = {
      message: '',
      data: {
        userType: 'email',
        user: email.current.value,
        password: password.current.value,
      },
    };
    loginAPI(data, dispatch);
  };

  return (
    <div className="login-container">
      <div className="login-button-container">
        <button className="login-button login-button-entry">ورود</button>
        <button className="login-button login-button-register">ثبت نام </button>
      </div>
      <form action="#" onSubmit={formHandler} className="login-form-container">
        <div className="login-form-group">
          <li className="form-icon">
            <FaUserCircle />
          </li>
          <input
            type="email"
            ref={email}
            placeholder="              نام کاربری"
            className="login-form-input login-form-input-email form-group-input"
            id="email"
            name="email"
          />
          <div className="icon-wrapper">
            <li className="alert-link icon-exclamation">
              <FaExclamation />
            </li>
            <li className="alert-link icon-circle">
              <BsCircle />
            </li>
          </div>
        </div>
        <div className="login-form-group">
          <li className="form-icon">
            <FaKey />
          </li>
          <input
            type="password"
            ref={password}
            placeholder="              گذرواژه"
            className="login-form-input login-form-input-password form-group-input"
            id="password"
            name="password"
          />
          <div className="icon-wrapper">
            <li className="alert-link icon-exclamation">
              <FaExclamation />
            </li>
            <li className="alert-link icon-circle">
              <BsCircle />
            </li>
          </div>
        </div>
      </form>

      <div className="login-link-container">
        <a href="" className="login-link question-link">
          حساب کاربری ندارید؟
        </a>
        <div className="login-link-wrapper">
          <a href="" className="login-link alert-link">
            !نام کاربری اشتباست{' '}
          </a>
          <div className="icon-wrapper">
            <li className="alert-link icon-exclamation">
              <FaExclamation />
            </li>
            <li className="alert-link icon-circle">
              <BsCircle />
            </li>
          </div>
        </div>

        <div className="login-link-wrapper">
          <a href="" className="login-link alert-link">
            !گذرواژه اشتباه است{' '}
          </a>
          <div className="icon-wrapper">
            <li className="alert-link icon-exclamation">
              <FaExclamation />
            </li>
            <li className="alert-link icon-circle">
              <BsCircle />
            </li>
          </div>
        </div>
      </div>

      <button className="entry-button button">ورود</button>
    </div>
  );
}
