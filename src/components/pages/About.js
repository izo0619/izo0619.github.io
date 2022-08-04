import React from 'react'
import '../../App.css';
import pfp4 from '../../images/pfp4.png'
function About() {
    return (
        <div className="about">
            <h1>about</h1>
            <br/>
            <p>Hi! I am an aspiring engineer interested in the intersection of medicine, biology, and engineering.
                My love for engineering sparks from my passion for problem solving, so I'm open minded and happy to learn about anything software, 
                hardware, mechanical design, or project management related.
            </p>
            <br/>
            <p> I am currently a junior at Northwestern pursuing my B.S. in biomedical engineering and a M.S. in computer science concurrently through
                the BS/MS program graduating in June 2024.
            </p>
            <br/>
            <p>In the past, I have done a few internships at startups where I picked up most of my coding skills outside of coursework. I also completed
                an internship at Microsoft this past summer. I have done research beginning my freshman year at Northwestern with various labs and I 
                currently work in the Mangan Group which is part of the Center of Quantitative Biology. I am also on Northwestern's Formula SAE team, 
                leading the software team this year.
            </p>
            <br/>
            <p>
                Outside of school, I like to dance and explore new restaurants and cafes in my area :))
                I am open to opportunities in both industry and academia, so please feel free to contact me or connect on LinkedIn to chat!
            </p>
            <br/>
            <br/>
            <img src={pfp4}></img>
        </div>
    )
}

export default About
