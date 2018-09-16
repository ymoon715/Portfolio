import React, {Component} from 'react';
import './Drawer.css';

class Drawer extends Component {

    componentDidMount(){
        document.addEventListener("scroll", this.textcolorchange)
    }
    textcolorchange = () => {
        const about = document.getElementById("about").offsetTop - 100
        const portfolio = document.getElementById("portfolio").offsetTop - 100
        const contact = document.getElementById("contact").offsetTop - 100
        if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < about) {
            document.getElementById("zero").className = ""
            document.getElementById("one").className = "";
            document.getElementById("two").className = "";
            document.getElementById("three").className = "";
        } else if (document.documentElement.scrollTop > about && document.documentElement.scrollTop < portfolio) {
            document.getElementById("zero").className = ""
            document.getElementById("one").className = "toolactive";
            document.getElementById("two").className = "";
            document.getElementById("three").className = "";
        }  else if (document.documentElement.scrollTop > portfolio && document.documentElement.scrollTop < contact) {
            document.getElementById("zero").className = ""
            document.getElementById("one").className = "";
            document.getElementById("two").className = "toolactive";
            document.getElementById("three").className = "";
        }  else if (document.documentElement.scrollTop > contact) {
            document.getElementById("zero").className = ""
            document.getElementById("one").className = "";
            document.getElementById("two").className = "";
            document.getElementById("three").className = "toolactive";
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
    render(){

    
    let drawerclass = 'drawer'
    if (this.props.drawerOpen && this.props.detailOpen){
        drawerclass = 'drawer open'
    }
    return (
    <div className={drawerclass} >
        <div className="drawerspan">
                <div className="spacer" />
            <div onClick={this.props.click} className="drawerIcon">
            <i className="fas fa-times"></i>
            </div>
        </div>
        <nav className="drawerNav">
            <ul>
                <li id="zero" onClick={this.onclickHome}>HOME</li>
                <li id="one" onClick={this.onclickAbout}>ABOUT</li>
                <li id="two" onClick={this.onclickPortfolio}>PORTFOLIO</li>
                <li id="three" onClick={this.onclickContact}>CONTACT</li>
            </ul>
        </nav>
    </div>
    )
    }
}
    

export default Drawer;