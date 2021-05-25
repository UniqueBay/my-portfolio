import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Typed from "react-typed";

export default function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi😀, I am
                    <Typed 
                    className="typed-text" 
                    strings={[" Abayomi Alabi", " Abayomi.Js", " Unique Abayomi", " Unique Bay🌹"]} 
                    typeSpeed={80}
                    backSpeed={60}
                    loop
                    />
                </h1>
                <p className="home-sub-text">
                    Hi again, My name is Abayomi, and i'm a Front-End Developer, before that
                     am just some guy who loves solving Maths problem, Puzzles and Maze anywhere i can find them.
                      Basically am just an addicted problem solver in love with Anime and Dogs.! Wanna talk about something
                       interesting, be sure to hit me up on any of those social media links. Lets connect.!
                </p>
                <div className="icons">
                    <Link to="/" className="icon-holder">
                    <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="/" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="/" className="icon-holder">
                    <FontAwesomeIcon icon={faTwitter} className="icon tw" />
                    </Link>
                    <Link to="/" className="icon-holder">
                    <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>
                </div>
            </header>
        </div>
    )
}
