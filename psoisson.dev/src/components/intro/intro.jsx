import React from 'react'
import "./intro.sass"
import profilepic from '../../img/profile.JPG'

export default function Intro() {
    return (
        <div className="Intro" id="intro">
            <div class="left">
                <img src={profilepic} class="Profile" alt="Profile"></img>
            </div>
            <div class="right">
                <div>
                    <h1>Patrick Soisson</h1>
                    <h4>Patrick graduated from The University of Texas at Dallas in May 2021 with a Bachelor's degree in Computer Science. He is passionate about automation, documentation, learning new technologies, modernization, and being purposefully inclusive.</h4>
                </div>
            </div>
            
        </div>
    )
}