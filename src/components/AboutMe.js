import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export const AboutMe = () => {
    return (
        <div className='about-me'>
            <Flippy flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <div className='about-front'>
                        <img src="./assets/headshot.jpg" width='25%'/>
                        <div className='about-text'>
                            <h1  className='section-head' id="about">About Me:</h1>
                            <h3 id="bio">Bio:</h3>
                            <p className='bio-text'>New York based full-stack web developer experienced in Ruby on Rails, JavaScript, React, and Redux. Discovered a love of programming while completing graduate school studies in International Cybersecurity at New York University. Seeking to build exciting yet secure applications for both consumers and businesses use.</p>
                        </div>
                    </div>
                </FrontSide>
                <BackSide>
                    <h3> Technical Skills: </h3>
                    <p className='bio-text'> Ruby | Ruby on Rails | HTML | CSS | JavaScript | React | Redux | React Native | MVC | SQL | SQLite | Postgresql | Responsive Web Design </p>
                    <h3> Hobbies: </h3>
                    <p> I like stuff </p>

                </BackSide>
            </Flippy>

        </div>
    )
}
