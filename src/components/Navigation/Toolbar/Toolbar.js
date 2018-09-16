import React, { Component } from 'react';
import './Toolbar.css'

class Toolbar extends Component {
    state = {
        class: "tbtrans"
    }
    componentDidMount(){
        document.addEventListener("scroll", this.tbFadeHandler)
        document.addEventListener("scroll", this.textcolorchange)
    }
    
    tbFadeHandler = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ){
            document.getElementById("toolbar").className = "toolbarscroll";
        } else {
            document.getElementById("toolbar").className = "toolbartop";
        }
    }

    onclickHome = () => {
        document.getElementById("home").scrollIntoView({
            behavior: 'smooth',
            block: "start",
            inline: "start"
        })
    }
    onclickAbout = () => {
        document.getElementById("about").scrollIntoView({
            behavior: 'smooth',
            block: "start",
            inline: "start"
        })
    }

    onclickPortfolio = () => {
        document.getElementById("portfolio").scrollIntoView({
            behavior: 'smooth',
            block: "start",
            inline: "start"
        })
    }

    onclickContact = () => {
        document.getElementById("contact").scrollIntoView({
            behavior: 'smooth',
            block: "start",
            inline: "start"
        })
    }

    textcolorchange = () => {
        const about = document.getElementById("about").offsetTop - 100
        const portfolio = document.getElementById("portfolio").offsetTop - 100
        const contact = document.getElementById("contact").offsetTop - 200
        if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < about) {
            document.getElementById("0").className = ""
            document.getElementById("1").className = "";
            document.getElementById("2").className = "";
            document.getElementById("3").className = "";
        } else if (document.documentElement.scrollTop > about && document.documentElement.scrollTop < portfolio) {
            document.getElementById("0").className = ""
            document.getElementById("1").className = "toolactive";
            document.getElementById("2").className = "";
            document.getElementById("3").className = "";
        }  else if (document.documentElement.scrollTop > portfolio && document.documentElement.scrollTop < contact) {
            document.getElementById("0").className = ""
            document.getElementById("1").className = "";
            document.getElementById("2").className = "toolactive";
            document.getElementById("3").className = "";
        }  else if (document.documentElement.scrollTop > contact) {
            document.getElementById("0").className = ""
            document.getElementById("1").className = "";
            document.getElementById("2").className = "";
            document.getElementById("3").className = "toolactive";
        }
    }
    render(){
        return (
            <div id="toolbar" className="toolbartop">
                    
                    <div className="toolbar_nav">
                    
                        <nav>
                        <div className="spacer" />
                            <ul>
                                <li onClick={this.onclickHome} id="0">HOME</li>
                                <li onClick={this.onclickAbout}  id="1" >ABOUT</li>
                                <li onClick={this.onclickPortfolio} id="2" >PORTFOLIO</li>
                                <li onClick={this.onclickContact} id="3" >CONTACT</li>
                            </ul>
                        <div className="spacer" />
                        <div className="drawericon" onClick={this.props.click}>
                        <div className="spacer" />
                        <i className="fas fa-bars"></i>
                        </div>
                        </nav>
                    </div>
                    
                    
            </div>
        )
    };
};

export default Toolbar;