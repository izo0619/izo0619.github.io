import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/freezeframe.png'
              text='Freeze Frame (DTC1 Project)'
              path='https://symposium.foragerone.com/nudtcwq2021/presentations/13262'
            />
            <CardItem
              src='images/nuarchcad.png'
              text='Weber Arch Model'
              path='https://grabcad.com/library/northwestern-weber-arch-1'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pillpunter.png'
              text='Pill Punter (MakeHarvard submission)'
              path='https://devpost.com/software/pill-punter'
            />
            <CardItem
              src='images/yakultcad.png'
              text='Yakult Model'
              path='https://grabcad.com/library/babey-yakult-1'
            />
            <CardItem
              src='images/bootlegpictionary.png'
              text='Bootleg Pictionary (CSSI Final Project)'
              path='https://github.com/izo0619/cssifinalproject'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sanrioblock.png'
              text='SanrioBlock'
              path='https://github.com/izo0619/SanrioBlock'
            />
            <CardItem
              src='images/camandfollower.png'
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