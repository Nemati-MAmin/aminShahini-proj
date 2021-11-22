import React, { useState } from 'react'
import "./Authentication.css"
import { Login,Sign_up,Website_icons, } from '../../Components/Exports'

export default function AuthenticationPage() {

    const [signUpPage, setSignUpPage] = useState(true);

    return (
        <div className= { `authentication-container ${signUpPage ?'' : 'authentication-container-login'}` }>
            {signUpPage ? <Website_icons signUpPage={signUpPage} /> : ''}
            {signUpPage ?  <Sign_up /> : <Login />}
            {/* <Website_icons signUpPage={signUpPage} /> */}
            {signUpPage ? '' : <Website_icons signUpPage={signUpPage} />}
            {/* <Sign_up /> */}
        </div>
    )
}
