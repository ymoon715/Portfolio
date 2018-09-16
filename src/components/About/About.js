import React, { Component } from 'react';
import './About.css';
import Slides from './Slides/Slides';



class About extends Component {
    componentDidMount(){
        document.addEventListener('scroll',this.aboutFadeInHandler)
    }
    aboutFadeInHandler = () => {
        const about = document.getElementById("about").offsetTop - 300;
        if (document.body.scrollTop > about || document.documentElement.scrollTop > about ){
            document.getElementsByClassName("about-details")[0].className = "about-details animate";
        }
    }
    render() {

        return (
            <div id="about" className="about">
                <div id="aboutdetails" className="about-details" >
                    <Slides />
                </div>
            </div>
        )
    }
}

export default About;