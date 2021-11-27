import React, { useRef, useHistory, useState } from 'react';
import axios from 'axios';
import './Sign_up.css';
import { FaTable, FaUserCircle } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { BsCircle } from 'react-icons/bs';
import REACT_APP_URI from '../../API_LINK';
import { Link } from 'react-router-dom'

export default function Sign_up() {
  const username = useRef();
  const phoneNum = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const [usernameEmptiness, usernameIsEmpty] = useState('')
  const [emailEmptiness, emailIsEmpty] = useState('')
  const [phoneNumEmptiness, phoneNumIsEmpty] = useState('')
  const [passwordEmptiness, passwordIsEmpty] = useState('')
  const [passwordAgainEmptiness, passwordAgainIsEmpty] = useState('')

  // const history = useHistory()

  const formHandler = async (e) => {
    e.preventDefault();
    // console.log(user.username)
    const user = {
      message: '',
      data: {
        name: {
          first: '',
          last: '',
        },
        phone: phoneNum.current.value,
        email: email.current.value,
        password: password.current.value,
        confirm: passwordAgain.current.value,
        devId: '12345',
      },
    };
    console.log(REACT_APP_URI);

    try {
      const res = await axios.post(`${REACT_APP_URI}/shop/signup`, user);
      console.log(res.data);
      // history.push("#")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign_up-container">
      <div className="sign_up-button-container">
        <Link to='/login' >
        <button className="sign_up-button sign_up-button-entry">ورود</button>
        </Link>
        <button className="sign_up-button sign_up-button-register">
          ثبت نام{' '}
        </button>
      </div>

      <form onSubmit={formHandler} className="sign_up-form-container">
        <div className="sign_up-form-group">
          <div className={`icon-wrapper ${
              usernameEmptiness === '' ? '' : 'usernameEmpty'
            }`}>
            <li className="icon-exclamation">
              <FaExclamation />
            </li>
            <li className="icon-circle">
              <BsCircle />
            </li>
          </div>
          <input
            type="text"
            ref={username}
            value={usernameEmptiness}
            onChange={e => usernameIsEmpty(e.target.value)}
            placeholder="نام کاربری"
            className="sign_up-form-input sign_up-form-input-email form-group-input"
            id="email"
            name="email"
          />
          <li className="sign_up-form-icon form-icon">
            <FaUserCircle />
          </li>
        </div>
        <div className="sign_up-form-group">
          <div className={`icon-wrapper ${
              phoneNumEmptiness === '' ? '' : 'phoneNumEmpty'
            }`}>
            <li className="icon-exclamation">
              <FaExclamation />
            </li>
            <li className="icon-circle">
              <BsCircle />
            </li>
          </div>
          <input
            type="text"
            ref={phoneNum}
            value={phoneNumEmptiness}
            onChange={e => phoneNumIsEmpty(e.target.value)}
            placeholder="تلفن همراه"
            className="sign_up-form-input sign_up-form-input-password form-group-input"
            id="password"
            name="password"
          />
          <li className="sign_up-form-icon form-icon">
            <BsTelephone />
          </li>
        </div>

        <div className="sign_up-form-group">
          <div className={`icon-wrapper ${
              emailEmptiness === '' ? '' : 'emailEmpty'
            }`}>
            <li className="icon-exclamation">
              <FaExclamation />
            </li>
            <li className="icon-circle">
              <BsCircle />
            </li>
          </div>
          <input
            type="email"
            ref={email}
            value={emailEmptiness}
            onChange={e => emailIsEmpty(e.target.value)}
            placeholder="ایمیل"
            className="sign_up-form-input sign_up-form-input-password form-group-input"
            id="password"
            name="password"
          />
          <li className="sign_up-form-icon form-icon">
            <FiMail />
          </li>
        </div>

        <div className="sign_up-form-group">
          <div className={`icon-wrapper ${
              passwordEmptiness === '' ? '' : 'passwordEmpty'
            }`}>
            <li className="icon-exclamation">

              <FaExclamation />
            </li>
            <li className="icon-circle">
              <BsCircle />
            </li>
          </div>
          <div className="pass_group">
            <input
              type="password"
              ref={passwordAgain}
              value={passwordAgainEmptiness}
              onChange={passwordAgainIsEmpty}
              placeholder="تایید گذرواژه"
              className="sign_up-form-input sign_up-form-input-password form-group-input"
              id="password"
              name="password"
            />
            <input
              type="password"
              ref={password}
              value={passwordEmptiness}
              onChange={passwordIsEmpty}
              placeholder="گذرواژه"
              className="sign_up-form-input sign_up-form-input-password form-group-input"
              id="password"
              name="password"
            />
          </div>
          <li className="sign_up-form-icon form-icon fakey">
            <FaKey style={{position: 'absolute',left: '19.5rem'}} />
          </li>
        </div>

        <div className="sign_up-link-container">
          <a href="" className="sign_up-link question-link">
            حساب کاربری دارید؟
          </a>
          <div className="sign_up-link-wrapper">
            <a href="" className="sign_up-link alert-link">
              فیلد ضروری
            </a>
            <div className='icon-wrapper'>
              <li className="icon-exclamation">
                <FaExclamation />
              </li>
              <li className="icon-circle">
                <BsCircle />
              </li>
            </div>
          </div>
        </div>
        <button type="submit" className="sign_up-button button">
          ثبت
        </button>
      </form>

      {/* <button htmlFor="btn-submit" type='button' className="sign_up-button button">ثبت</button> */}
      {/* <label htmlFor="btn-submit">asdasdasd</label> */}
    </div>
  );
}
