import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import freezeframe from '../images/freezeframe.png';
import nuarchcad from '../images/nuarchcad.png';
import pillpunter from '../images/pillpunter.png'
import yakultcad from '../images/yakultcad.png'
import bootlegpictionary from '../images/bootlegpictionary.png'
import sanrioblock from '../images/sanrioblock.png'
import camandfollower from '../images/camandfollower.png'
import perlinnoise from '../images/perlinnoise.gif'
import celegans from '../images/celegans.png'
import fb from '../images/flappy.png'
import nfr from '../images/nfr.jpg'
import xenobot from '../images/xenobot.gif'
import dance from '../images/dance335.jpg'
import hackuiowa from '../images/tunetwin.png'
import capstone from '../images/capstone.jpg'
import ee332 from '../images/ee332.jpg'
import rogers from '../images/rogers.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={nfr}
                            text='Northwestern Formula Racing Software (EV)'
                            path='https://github.com/NU-Formula-Racing'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={capstone}
                            text='MRI-Compatible Chest Compression Device (BME Capstone, WIP)'
                            path='https://drive.google.com/file/d/1308bqTXnu3Wi8K7Kgv48WQkEqi4FnyLB/view?usp=sharing'
                        />
                        <CardItem
                            src={xenobot}
                            text='Morphology Evolution with Differentiable Physics Engines (Xenobot Lab, WIP - no link yet)'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={celegans}
                            text='Image Processing on C.Elegans (Mangan Group)'
                            path='https://github.com/izo0619/celegans_img_proc'
                        />
                        <CardItem
                            src={rogers}
                            text='Skin-Interfaced Wearable for Vocal Fatigue (Rogers Lab)'
                            path='https://doi.org/10.1073/pnas.2219394120'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={ee332}
                            text="Where's Waldo? (EE 332 Computer Vision Final Project)"
                            path='https://drive.google.com/file/d/1On0NzBGEHjB5nJkQnhLoWM5r8gEba4aa/view?usp=sharing'
                        />
                        <CardItem
                            src={hackuiowa}
                            text='TuneTwin (HackUIowa submission)'
                            path='https://devpost.com/software/yeet-7vx5cb'
                        />
                        <CardItem
                            src={dance}
                            text='Butterfly Effect (Dance 335 Performance and Technology Final Project)'
                            path='https://www.youtube.com/watch?v=DpXqGQT3Rls'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={perlinnoise}
                            text='Perlin Noise Flow Field Simulation'
                            path='https://github.com/izo0619/perlin-noise-flow-field'
                        />
                        <CardItem
                            src={fb}
                            text='C++ Flappy Bird'
                            path='https://github.com/izo0619/cpp-flappybird'
                        />
                        <CardItem
                            src={nuarchcad}
                            text='Weber Arch Model'
                            path='https://grabcad.com/library/northwestern-weber-arch-1'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={freezeframe}
                            text='Freeze Frame (DTC1 Project)'
                            path='https://drive.google.com/file/d/14vTao-ZU2BSOTzJ6al69Hzr1mBf1AEZ5/view?usp=sharing'
                        />
                        <CardItem
                            src={pillpunter}
                            text='Pill Punter (MakeHarvard submission)'
                            path='https://devpost.com/software/pill-punter'
                        />
                        <CardItem
                            src={yakultcad}
                            text='Yakult Model'
                            path='https://grabcad.com/library/babey-yakult-1'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={sanrioblock}
                            text='SanrioBlock'
                            path='https://github.com/izo0619/SanrioBlock'
                        />
                        <CardItem
                            src={camandfollower}
                            text='Cam and Follower Model'
                            path='https://grabcad.com/library/cam-follower-32'
                        />
                        <CardItem
                            src={bootlegpictionary}
                            text='Bootleg Pictionary (CSSI Final Project)'
                            path='https://github.com/izo0619/cssifinalproject'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;