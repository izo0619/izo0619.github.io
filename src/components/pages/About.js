import React from 'react'
import '../../App.css';
import pfp4 from '../../images/pfp4.png'
function About() {
    return (
        <div className="about">
            <h1>about</h1>
            <br />
            <p>Hi! I am a senior at Northwestern pursuing my B.S. in biomedical engineering and a M.S. in computer science concurrently through
                the BS/MS program graduating in June 2024. As an aspiring engineer interested in the intersection of medicine, biology, and engineering,
                I strongly believe that the future of medical care lies in robust robotics and wearable systems.
            </p>
            <br />
            <p> I am interested in 1) developing robots inspired by intelligent biological systems and 2) using computational biology and neuroscience to further our
                understanding of the human body to better interface with it.
            </p>
            <br />
            <p>In the past, I have done a few internships at startups and in big tech where I picked up most of my coding skills outside of coursework, as well as insight on how to build stable and scalable systems.
                I have worked with the Mangan Group on quantitative biology research (2021-2023) and am now with the Xenobot group working on differentiable evolutionary robotics.
                I have also been on Northwestern's Formula SAE team for the past three years, where I piloted the software team and aided the transition to EV.
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
