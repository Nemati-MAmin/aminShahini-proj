import React from 'react'
import './Website_icons.css'

import { Rectangle } from '../../assets/Exports'

export default function Website_icons( {signUpPage} ) {
    return (
        <div className= {`website-icons-container ${signUpPage ? 'website-icons-container-sign_up' : 'website-icons-container-login'}`} > 

            <div className='website-icons-wrapper'>
                <div className="div-wrapper">
                    <div className="website-icons-div">
                        <li className="website-icons-text website-icons-text-1">و</li>
                    </div>
                    <div className="website-icons-div">
                        <li className="website-icons-text website-icons-text-2">ب</li>
                    </div>
                    <div className="website-icons-div">
                        <li className="website-icons-text website-icons-text-3">س</li>
                    </div>
                    <div className="website-icons-div">
                        <li className="website-icons-text website-icons-text-4">ا</li>
                    </div>
                    <div className="website-icons-div">
                        <li className="website-icons-text website-icons-text-5">ی</li>
                        <li className="website-icons-text website-icons-text-6">ت</li>
                    </div>
                </div>
            </div>

            {/* <Rectangle className='website-icons-Rectangle' /> */}
        </div>
    )
}
