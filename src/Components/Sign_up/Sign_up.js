import React from 'react'
import './Sign_up.css'
import { FaTable, FaUserCircle } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";

export default function Sign_up() {
    return (
        <div className='sign_up-container'>
            <div className="sign_up-button-container">
                <button className="sign_up-button sign_up-button-entry">ورود</button>
                <button className="sign_up-button sign_up-button-register">ثبت نام </button>
            </div>

            <form action="" className="sign_up-form-container">
                <div className="sign_up-form-group">
                     <div className="icon-wrapper">
                        <li className='icon-exclamation'><FaExclamation /></li>
                        <li className='icon-circle'><BsCircle /></li>
                    </div>
                    <input type="email" placeholder="                                         نام کاربری" className="sign_up-form-input sign_up-form-input-email form-group-input" id="email" name="email" />
                    <li className='sign_up-form-icon form-icon'><FaUserCircle /></li>
                </div>
                <div className="sign_up-form-group">
                    <div className="icon-wrapper">
                        <li className='icon-exclamation'><FaExclamation /></li>
                        <li className='icon-circle'><BsCircle /></li>
                    </div>
                    <input type="password" placeholder="                                        تلفن همراه" className="sign_up-form-input sign_up-form-input-password form-group-input" id="password" name="password" />
                    <li className='sign_up-form-icon form-icon'><BsTelephone /></li>
                </div> 
                
               <div className="sign_up-form-group">
                    <div className="icon-wrapper">
                        <li className='icon-exclamation'><FaExclamation /></li>
                        <li className='icon-circle'><BsCircle /></li>
                    </div>
                    <input type="password" placeholder="                                                  ایمیل" className="sign_up-form-input sign_up-form-input-password form-group-input" id="password" name="password" />
                    <li className='sign_up-form-icon form-icon'><FiMail /></li>
                </div>   
    
                <div className="sign_up-form-group">
                    <div className="icon-wrapper">
                        <li className='icon-exclamation'><FaExclamation /></li>
                        <li className='icon-circle'><BsCircle /></li>
                     </div>
                    <div className="pass_group">
                        <input type="password" placeholder="      تایید گذرواژه" className="sign_up-form-input sign_up-form-input-password form-group-input" id="password" name="password" />
                        <input type="password" placeholder="           گذرواژه" className="sign_up-form-input sign_up-form-input-password form-group-input" id="password" name="password" />                    
                    </div>
                    <li className='sign_up-form-icon form-icon'><FaKey /></li>
                </div>
            </form>

            <div className="sign_up-link-container">
                <a href="" className="sign_up-link question-link">حساب کاربری دارید؟</a>
                <div className='sign_up-link-wrapper'>
                    <a href="" className="sign_up-link alert-link">فیلد ضروری</a>
                    <div className="icon-wrapper">
                        <li className='icon-exclamation'><FaExclamation /></li>
                        <li className='icon-circle'><BsCircle /></li>
                    </div>
                </div> 
            </div>

                <button className="sign_up-button button">ثبت</button>

        </div>
    )
}