import React from 'react'
import '../../App.css';
import pfp4 from '../../images/pfp4.png'
function About() {
    return (
        <div className="about">
            <h1>about</h1>
            <br />
            <p>Hi! I am an aspiring engineer interested in the intersection of medicine, biology, and engineering.
                My love for engineering sparks from my passion for problem solving, so I'm open minded and happy to learn about anything software,
                hardware, mechanical design, or project management related.
            </p>
            <br />
            <p> I am a rising senior at Northwestern pursuing my B.S. in biomedical engineering and a M.S. in computer science concurrently through
                the BS/MS program graduating in June 2024.
            </p>
            <br />
            <p>In the past, I have done a few internships at startups and in big tech where I picked up most of my coding skills outside of coursework.
                I have worked with the Mangan Group on quantitative biology research (2021-2023) and am now with the Xenobot group working on differentiable evolutionary robotics.
                I am also on Northwestern's Formula SAE team where I led the software team for the 2022-2023 competition cycle.
            </p>
            <br />
            <p>
                Outside of school, I like to dance and explore new restaurants and cafes in my area :))
                I am open to opportunities in both industry and academia, so please feel free to contact me or connect on LinkedIn to chat!
            </p>
            <br />
            <br />
            <img src={pfp4}></img>
        </div>
    )
}

export default About
