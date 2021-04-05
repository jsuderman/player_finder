import React from 'react';
import "./Hero.css";

function Hero() {
    return (
        <header 
            className="hero"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            }}
        >
            <div className="hero__contents">
                <h1 className="hero__title">NBA General Manager</h1>
                <div className="hero__buttons">
                    <button className="hero__button">New Team</button>
                    <button className="hero__button">My Team</button>
                </div>
                <h1 className="hero__description">this is the test description</h1>
            </div>
        </header>
    )
}

export default Hero
