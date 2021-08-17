import React from 'react'
import '../../App.css';
import educationpic from '../../images/nu.jpeg'
function Education() {
    return (
        <div className="education">
            <h1>education</h1>
            <img src={educationpic}></img>
            <br/>
            <h3>northwestern university 2020-2024</h3>
            <p>B.S./M.S. biomedical engineering/computer science (intended)</p>
            <br/>
            <p>activities:</p>
            <ul>
                <li>northwestern formula racing</li>
                <li>society of women engineers</li>
                <li>biomedical engineering society</li>
                <li>chinese student association</li>
                <li>refresh dance crew</li>
            </ul>
        </div>
    )
}

export default Education
