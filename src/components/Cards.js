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

function Cards() {
  return (
    <div className='cards'>
      <h1>projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={freezeframe}
              text='Freeze Frame (DTC1 Project)'
              path='https://drive.google.com/file/d/14vTao-ZU2BSOTzJ6al69Hzr1mBf1AEZ5/view?usp=sharing'
            />
            <CardItem
              src={nuarchcad}
              text='Weber Arch Model'
              path='https://grabcad.com/library/northwestern-weber-arch-1'
            />
          </ul>
          <ul className='cards__items'>
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
            <CardItem
              src={bootlegpictionary}
              text='Bootleg Pictionary (CSSI Final Project)'
              path='https://github.com/izo0619/cssifinalproject'
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;