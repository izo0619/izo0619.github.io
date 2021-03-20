import React from 'react'
import '../../App.css';
import pfp4 from '../../images/pfp4.png'
function About() {
    return (
        <div className="about">
            <h1>about</h1>
            <br/>
            <p>Hi! I am an aspiring engineer with a wide variety of interests. Academically, I am interested in the intersection of medicine, biology, and engineering.
                Initially, I thought that this was such a niche field, but as I went through my coursework, I realized how diverse the field is so I am still trying to
                figure out where I should direct myself. My love for engineering sparks from my passion for problem solving, so I'm open to learning about software, 
                hardware, mechanical design, and project management.
            </p>
            <br/>
            <p>In the past, I have done a few internships at startups where I picked up most of my coding skills outside of coursework. I also helped the NU SONIC lab
                with research on human agent teaming in winter of 2021.
            </p>
            <br/>
            <p>
                Outside of school, I like to dance and explore new restaurants and cafes in my area :))
                Please feel free to contact me or connect on LinkedIn to chat!
            </p>
            <br/>
            <br/>
            <img src={pfp4}></img>
        </div>
    )
}

export default About
