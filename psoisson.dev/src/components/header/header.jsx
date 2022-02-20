import React from 'react'
import "./header.sass"

export default function Header() {
    return (
        <div className="Header">
            <div className="Title"href="#intro">psoisson.dev</div> 
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">okoko</a>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}