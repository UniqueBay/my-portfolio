import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../Img/phone.svg';
import email from '../Img/emailme.svg';
import location from '../Img/location.svg';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.893613892642!2d3.3681249218453595!3d6.619145438173262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a899b7c9b7%3A0x8630de71dbc44ffd!2sMagodo%20GRA%20Phase%20II%2C%20Ikosi%20Ketu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1622016705914!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+234 905 544 4512'} text2={'+234 913 543 5194'} title={'Phone Number'}/>
                    <ContactItem icon={email} text1={'abayomi15@gmail.com'} text2={'abayomialabi57@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Magodo, Lagos'} text2={'Nigeria'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
