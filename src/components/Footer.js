import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <a href='https://www.linkedin.com/in/isabel-zhong/' target="_blank">linkedin</a>
                        <a href='https://github.com/izo0619' target="_blank">github</a>
                    </div>
                </div>
                <div className="footer-p">
                    <p>izx at u.northwestern.edu</p>
                    <a href='https://drive.google.com/file/d/1oal-nVxJU4eqlMbuOaN4gSzAw8Oh-wRn/view?usp=sharing' target="_blank">resume</a>
                    <a> | </a>
                    <a href='https://drive.google.com/file/d/13rRBEcHjR14kZkTHNpnUBIIoEweegSKF/view?usp=sharing' target="_blank">cv</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
