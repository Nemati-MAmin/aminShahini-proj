import React, { useContext, useRef, useEffect, useState } from 'react';
import './Login.css';
import { FaTable, FaUserCircle } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';
import { loginAPI } from '../../LoginAPi';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom'

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [passwordEmptiness, passwordIsEmpty] = useState('');
  const [emailEmptiness, emailIsEmpty] = useState('');

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
        <Link to='/' >
          <button className="login-button login-button-register">ثبت نام </button>
        </Link>
      </div>
      <form action="#" onSubmit={formHandler} className="login-form-container">
        <div className="login-form-group">
          <li className="form-icon">
            <FaUserCircle />
          </li>
          <input
            style={{ outline: 'none' }}
            value={emailEmptiness}
            onChange={(e) => emailIsEmpty(e.target.value)}
            type="email"
            ref={email}
            placeholder="نام کاربری"
            className="login-form-input login-form-input-email form-group-input"
            id="email"
            name="email"
          />
          <div
            className={`icon-wrapper ${
              emailEmptiness === '' ? '' : 'emailEmpty'
            }`}
          >
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
            value={passwordEmptiness}
            onChange={(e) => passwordIsEmpty(e.target.value)}
            ref={password}
            placeholder="گذرواژه"
            className="login-form-input login-form-input-password form-group-input"
            id="password"
            name="password"
          />
          <div
            className={`icon-wrapper ${
              passwordEmptiness === '' ? '' : 'passwordEmpty'
            }`}
          >
            <li className="alert-link icon-exclamation">
              <FaExclamation />
            </li>
            <li className="alert-link icon-circle">
              <BsCircle />
            </li>
          </div>
        </div>
        
        <button type="submit" className="entry-button button">
          ورود
        </button>
      </form>
      
      <div className="login-link-container">
        <a href="" className="login-link question-link">
          حساب کاربری ندارید؟
        </a>
        <div className="inner-login-container">
          <div className="login-link-wrapper">
            <a href="" className="login-link alert-link">
              !نام کاربری اشتباست
            </a>
            <div className="icon-wrapper up">
              <li className="alert-link icon-exclamation">
                <FaExclamation />
              </li>
              <li className="alert-link icon-circle">
                <BsCircle />
              </li>
            </div>
          </div>
          <div className="login-link-wrapper down">
            <a href="" className="login-link alert-link">
              !گذرواژه اشتباه است
            </a>
            <div className="icon-wrapper down">
              <li className="alert-link icon-exclamation">
                <FaExclamation />
              </li>
              <li className="alert-link icon-circle">
                <BsCircle />
              </li>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
