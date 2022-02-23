import React from 'react'
import './styles/Section.scss'
import Profile2 from './assets/Profile-2.png'

const Section = () => {
    return (
        <div className='section'>


            <div className="section__container">


                <div className="section__img">
                    <img src={Profile2} alt="" />
                </div>


                <div className="section__content">
                    <h1>Who is Gurtej?</h1>
                    <p>Currently learning Full-stack Developer</p>
                    <p> UI & UX Designer</p>
                    <p>Architectural Draftsman</p>
                    <p>Graphic Designer</p>
                    <p>Freelancer</p>
                    <p>Web-Developer</p>
                </div>



            </div>


        </div>
    )
}

export default Section