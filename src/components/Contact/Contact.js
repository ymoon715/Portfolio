import React, {Component} from 'react';
import './Contact.css'

class Contact extends Component {

    componentDidMount(){
        document.addEventListener("scroll",this.contactTitleHandler);
        document.addEventListener("scroll",this.iconFadeHandler);
    }
    contactTitleHandler = () => {
        const contactH = document.getElementById("contact").offsetTop - 550;
        if (document.body.scrollTop > contactH || document.documentElement.scrollTop > contactH ){
            document.getElementById("conthead").className = "contact-header";
            document.getElementById("contact-underline").className = "contact-underline";
        }
    }
    iconFadeHandler = () => {
        const contactH = document.getElementById("contact").offsetTop - 450;
        if (document.body.scrollTop > contactH || document.documentElement.scrollTop > contactH ){
            document.getElementById("contact-container").className = "contact-container-appear";
        }
    }

    render(){
        return (
            <section id="contact" className="contact">
                <div className="contact-title">
                    <h2 id="conthead" className="cont-clear">Contact.</h2>
                    <div id="contact-underline" className="contact-clear" />
                </div>
                <div id="contact-container" className="contact-container">
                    <div onClick={()=>window.open("https://www.linkedin.com/in/young-moon-1674a4116/")} className="contact-icon">
                    <i className="fab fa-linkedin-in"></i>
                    </div>
                    <div onClick={()=>window.open("https://www.facebook.com/frankdanktank")} className="contact-icon">
                    <i className="fab fa-facebook-f"></i>
                    </div>
                    <div onClick={()=>window.open("https://github.com/ymoon715/")} className="contact-icon">
                    <i className="fab fa-github-alt"></i>
                    </div>
                    <div onClick={()=>window.open("mailto:ymoon715@gmail.com")} className="contact-icon">
                    <i className="far fa-envelope"></i>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;