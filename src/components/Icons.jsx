import React from 'react'
import './icons.css'
import chat from '../assets/chat.png'
import medication from '../assets/medication.png'
import schedule from '../assets/Schedule.png'
import compliance from '../assets/Compliance.png'
import visit from '../assets/Track-Visit.png'


const Icons = () => {
  return (
    <div className="icon-container">
        <div className="item">
            <div className="icon">
                <img src={chat} alt="img" className='icon-img' />
            </div>
            <h1 className='heading'>Messaging</h1>
            <p className="detail">Lorem ipsum dolor sit amet consectetur soluta?</p>
        </div>
        <div className="item">
            <div className="icon">
                <img src={medication} alt="img" className='icon-img' />
            </div>
            <h1 className='heading'>Medication</h1>
            <p className="detail">Lorem ipsum dolor sit amet consectetur soluta?</p>
        </div>
        <div className="item">
            <div className="icon">
                <img src={schedule} alt="img" className='icon-img' />
            </div>
            <h1 className='heading'>Schedule</h1>
            <p className="detail">Lorem ipsum dolor sit amet consectetur soluta?</p>
        </div>
        <div className="item">
            <div className="icon">
                <img src={compliance} alt="img" className='icon-img' />
            </div>
            <h1 className='heading'>Compliance</h1>
            <p className="detail">Lorem ipsum dolor sit amet consectetur soluta?</p>
        </div>
        <div className="item">
            <div className="icon">
                <img src={visit} alt="img" className='icon-img' />
            </div>
            <h1 className='heading'>Track Visit</h1>
            <p className="detail">Lorem ipsum dolor sit amet consectetur soluta?</p>
        </div>
        

    </div>
  )
}

export default Icons