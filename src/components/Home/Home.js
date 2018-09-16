import React, { Component } from 'react';
import './Home.css'


class Home extends Component {

componentDidMount(){
    document.addEventListener("scroll", this.textFadeInHandler);
    document.addEventListener("scroll", this.clickFadeInHandler)
}

textFadeInHandler = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        document.getElementById("homeheader").className = "out";
    } else {
        document.getElementById("homeheader").className = "hometitle";
    }
}

clickFadeInHandler = () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350 ){
        document.getElementById("clickstart").className = "clickclear";
    } else {
        document.getElementById("clickstart").className = "clickabout";
    }
}

onclickAbout = () => {
    document.getElementById("about").scrollIntoView({
        behavior: 'smooth',
        block: "start",
        inline: "start"
    })
}
// onclick, should have onclick handler
// slides down smoothly to top of the about section.

render() {
    return (
    <section id="home">
        <div className="home">
            <div id="homeheader" className="hometitle">
                <h1>YOUNG MOON</h1>
                <p>Developer based in Los Angeles</p>
            </div>
            <div id="clickstart" className="clickabout" onClick={this.onclickAbout}>
                <i className="fas fa-angle-down"></i>
            </div>
        </div>
    </section>
    )
}
}

export default Home;