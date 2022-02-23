import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import Profile from './assets/Profile.png'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>What's up!</p>
                            <h1>I am Gurtej Singh</h1>
                            <p>Full-stack Developer & Freelance</p>

                            <div className="icons">
                                <Twitter className='icon'/>
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                                <LinkedIn className='icon'/>
                                <Pinterest className='icon'/>
                            </div>


                    <div className="buttons">
                        <button>See My Projects!</button>
                        <button>Hire Me!</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={Profile} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main