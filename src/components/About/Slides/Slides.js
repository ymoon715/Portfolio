import React, { Component } from "react";
import "./Slides.css";
import portrait from "./portrait.jpg";

class Slides extends Component {
  state = {
    index: 1
  };
  componentDidMount() {
    window.onload = this.sliderHandler();
    document.addEventListener("scroll", this.aboutFadeInHandler);
    document.addEventListener("scroll", this.imageFadeInHandler);
    document.getElementById("prev").addEventListener("click", this.prevHandler);
    document.getElementById("next").addEventListener("click", this.nextHandler);
  }

  prevHandler = () => {
    const slider = document.getElementsByClassName("about-slide");
    this.setState({ index: this.state.index - 1 });
    if (this.state.index > slider.length) {
      this.setState({ index: 1 });
    }
    if (this.state.index < 1) {
      this.setState({ index: slider.length });
    }
    for (let i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
    }
    slider[this.state.index - 1].style.display = "block";
  };

  nextHandler = () => {
    const slider = document.getElementsByClassName("about-slide");
    this.setState({ index: this.state.index + 1 });
    if (this.state.index > slider.length) {
      this.setState({ index: 1 });
    }
    if (this.state.index < 1) {
      this.setState({ index: slider.length });
    }
    for (let i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
    }
    slider[this.state.index - 1].style.display = "block";
  };

  sliderHandler = () => {
    const slider = document.getElementsByClassName("about-slide");
    if (this.state.index > slider.length) {
      this.setState({ index: 1 });
    }
    if (this.state.index < 1) {
      this.setState({ index: slider.length });
    }
    for (let i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
    }
    slider[this.state.index - 1].style.display = "block";
  };

  aboutFadeInHandler = () => {
    const about = document.getElementById("about").offsetTop - 200;
    if (
      document.body.scrollTop > about ||
      document.documentElement.scrollTop > about
    ) {
      document.getElementsByClassName("name")[0].className = "name first";
      document.getElementsByClassName("name")[1].className = "name second";
    }
  };
  imageFadeInHandler = () => {
    const about = document.getElementById("about").offsetTop - 300;
    if (
      document.body.scrollTop > about ||
      document.documentElement.scrollTop > about
    ) {
      document.getElementsByClassName("aboutimg")[0].className =
        "aboutimg left";
    }
  };

  render() {
    return (
      <div id="web-about" className="web-about">
        <div className="web-about-container">
          <div className="aboutimg">
            <img src={portrait} alt="Me" />
          </div>
          <div className="about-info">
            <div className="about-intro">
              <h2 className="name">Young Moon</h2>

              <p className="name">
                JavaScript, Node.js, React.js, Redux, Html/CSS
              </p>
            </div>

            <div className="about-slide">
              <div className="aboutunderline" />
              <p>
                I'm a developer who is devoted and obsessed with my craft. As a
                competitive and passionate person, I thrive to be beyond
                exceptional at what I do. I love what I do and I love learning
                something new everyday.
              </p>
            </div>
            <div className="about-slide">
              <div className="aboutunderline two" />
              <p>
                {" "}
                Front-End:
                <br />
                <br /> React, Redux, Sass, Material-UI, Bootstrap, pure-CSS.
                Anything front-end I can do. I can adapt, learn, and thrive.
              </p>
            </div>
            <div className="about-slide">
              <div className="aboutunderline three" />
              <p>
                Back-End:
                <br />
                <br /> Currently I work with Node.js for my back-end operations.
                For database, I mainly use MongoDB. To create RESTful API's, I
                use Express. I enjoy playing with passport and bycrypt for
                authentication.
              </p>
            </div>
            <div id="prev">
              <i className="fas fa-angle-left" />
            </div>
            <div id="next">
              <i className="fas fa-angle-right" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slides;
