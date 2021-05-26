import React from 'react';
import about from "../Img/about2.jpg";

function AboutImage() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="Abayomi" />
            </div>
            <div className="about-info">
                <h4> I am <span>Abayomi Alabi</span></h4>
                <p className="about-text">Building state-of-the-art, easy to use, user-friendly website
                and applications is truly a passion of mine and i am confident, i would be an excellent addition to your team.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Phone</p>
                        <p>Email</p>
                        <p>Addictions</p>
                    </div>
                    <div className="right-section">
                        <p>:  Abayomi Alabi</p>
                        <p>:  25</p>
                        <p>:  Nigeria</p>
                        <p>:  English, French</p>
                        <p>:  (+234) 905-544-4512</p>
                        <p>:  abayomi15@gmail.com</p>
                        <p>:  Problem Solving, Watching Anime, Acting, Swimming and Coding</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default AboutImage;
