import React from 'react'
import '../../App.css';
import pfp4 from '../../images/pfp4.png'
function About() {
    return (
        <div className="about">
            <h1>about</h1>
            <br/>
            <p>Hi! I am an aspiring engineer with a wide variety of interests. Academically, I am interested in the intersection of medicine, biology, and engineering.
                Initially, I thought that this was such a niche area, but I have since realized how diverse the field is so I am still trying to
                figure out where I should direct myself. My love for engineering sparks from my passion for problem solving, so I'm open to learning about software, 
                hardware, mechanical design, and project management.
            </p>
            <br/>
            <p> I am currently a sophomore at Northwestern pursuing my B.S. in biomedical engineering. However, I find that my courseload is lacking
                in software content so I am trying to take more CS courses to complete an M.S. in computer science within the four years.
            </p>
            <br/>
            <p>In the past, I have done a few internships at startups where I picked up most of my coding skills outside of coursework. I also started research
                beginning my freshman year at Northwestern with various labs. I currently work in the Mangan Group which is part of the Center of Quantitative Biology.
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
