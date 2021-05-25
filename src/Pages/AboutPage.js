import React from 'react';
import AboutImage from '../Components/AboutImage';
import Title from "../Components/Title";
import design from '../Img/design.svg';
import intelligence from '../Img/intelligence.svg';
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={"About Me"} span={"About Me"} />
            <AboutImage />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Bootstrap'}progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Jquery'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Git'} progress={'76%'} width={'76%'} />
            </div>

            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} 
                text={'I design award winning websites that encourage your visitors to take the actions needed to meet your online objectives. I design my websites to be responsive, delivering optimum performance and visuals for all devices. This means basically means that each of your users will get a tailored browsing experience for Desktop, iphone, Android and Tablet PC like the iPad.'}
                />
                <ServicesSection image={intelligence} title={'Interface Design'} 
                text={'My design does not only look beautiful, they actually work. I consider every detail from user experience and accessibility to search engine optimisation. With this level of details, you get the right result time after time.'}
                />
                <ServicesSection image={design} title={'Application'} 
                text={'Think it all about Websites?  No!!!❌ We apply the same creativity and details to stunning mobile applications.😋'}
                />
            </div>
        </div>
    )
}

export default AboutPage;
