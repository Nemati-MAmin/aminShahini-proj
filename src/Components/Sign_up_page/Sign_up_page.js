import React, { useState } from 'react';
import './Sign_up_page.css';
import { Login, Sign_up, Website_icons } from '../../Components/Exports';

export default function Sign_up_page() {
  const [signUpPage, setSignUpPage] = useState(true);

  return (
    <div
      className={`authentication-container ${
        signUpPage ? '' : 'authentication-container-login'
      }`}
    >
      {signUpPage ? <Website_icons signUpPage={signUpPage} /> : ''}
      {signUpPage ? <Sign_up /> : <Login />}
      {/* <Website_icons signUpPage={signUpPage} /> */}
      {signUpPage ? '' : <Website_icons signUpPage={signUpPage} />}
      {/* <Sign_up /> */}
    </div>
  );
}
