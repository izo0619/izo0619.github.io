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
                <p>isabelzhong at u.northwestern.edu</p>
                <a href='https://drive.google.com/file/d/1dC7xhC9Tz9CuNTI3IYVjd_zs5CUTUh34/view?usp=sharing' target="_blank">resume</a>
            </div>
        </div>
        </div>
    )
}

export default Footer
