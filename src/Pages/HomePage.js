import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Abayomi Alabi</span>
                </h1>
                <p className="home-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim error quasi dolore, dolorem, officiis exercitationem fuga, 
                    sint harum dolor neque incidunt. Inventore natus animi, 
                    commodi dolores unde necessitatibus recusandae quo.
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
