import React from 'react'
import "./Login.css"
import { FaTable, FaUserCircle } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";


export default function Login() {
    return (
        <div className='login-container'>
            <div className="login-button-container">
                <button className="login-button login-button-entry">ورود</button>
                <button className="login-button login-button-register">ثبت نام </button>
            </div>
            <form action="" className="login-form-container">
                <div className="login-form-group">
                    <li className='form-icon'><FaUserCircle /></li>
                    <input type="email" placeholder="              نام کاربری" className="login-form-input login-form-input-email form-group-input" id="email" name="email" />
                    <div className="icon-wrapper">
                        <li className='alert-link icon-exclamation'><FaExclamation /></li>
                        <li className='alert-link icon-circle'><BsCircle /></li>
                    </div>
                </div>
                <div className="login-form-group">
                    <li className='form-icon'><FaKey /></li>
                    <input type="password" placeholder="              گذرواژه" className="login-form-input login-form-input-password form-group-input" id="password" name="password" />
                    <div className="icon-wrapper">
                        <li className='alert-link icon-exclamation'><FaExclamation /></li>
                        <li className='alert-link icon-circle'><BsCircle /></li>
                    </div>
                </div>
            </form>

            <div className="login-link-container">
                <a href="" className="login-link question-link">حساب کاربری ندارید؟</a>
                <div className='login-link-wrapper'>
                    <a href="" className="login-link alert-link">!نام کاربری اشتباست </a>
                    <div className="icon-wrapper">
                        <li className='alert-link icon-exclamation'><FaExclamation /></li>
                        <li className='alert-link icon-circle'><BsCircle /></li>
                    </div>
                </div> 
                
                <div className='login-link-wrapper'>

                    <a href="" className="login-link alert-link">!گذرواژه اشتباه است </a>
                    <div className="icon-wrapper">
                        <li className='alert-link icon-exclamation'><FaExclamation /></li>
                        <li className='alert-link icon-circle'><BsCircle /></li>
                    </div>               
                    
                 </div>

            </div>

                <button className="entry-button button">ورود</button>

        </div>
    )
}
