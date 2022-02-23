import React from 'react'
import Img1 from './assets/Weatherex-screenshot.png'
import Img2 from './assets/blog.png'
import Img3 from './assets/color-flipper.png'
import Img4 from './assets/Daily-scheduler.png'
import Img5 from './assets/home-page.png'
import Img6 from './assets/Quizify.png'
import './styles/Projects.scss'

const Projects = () => {
    return (
        <div className='works'>
            <div className="work__section">


                <div className="cards">
                    <img src={Img1} alt="" />
                    <button>See Project</button>
                </div>

                <div className="cards">
                    <img src={Img2} alt="" />
                    <button>See Project</button>
                </div>

                <div className="cards">
                    <img src={Img3} alt="" />
                    <button>See Project</button>
                </div>

                <div className="cards">
                    <img src={Img4} alt="" />
                    <button>See Project</button>
                </div>

                <div className="cards">
                    <img src={Img5} alt="" />
                    <button>See Project</button>
                </div>

                <div className="cards">
                    <img src={Img6} alt="" />
                    <button>See Project</button>
                </div>
            </div>
        </div>
    )
}

export default Projects