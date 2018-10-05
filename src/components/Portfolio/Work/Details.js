import React, { Component } from "react";
import "./Details.css";
import Drum from "./detailimg/DrumMachine.jpg";
import Portimg from "./detailimg/Portfolioog.jpg";
import Calculator from "./detailimg/Calculator.jpg";
import LTRXone from "./detailimg/LTRX1.jpg";
import Weather from "./detailimg/Weather.jpg";
import EzRefill from "./detailimg/EzRefill.jpg";
import EzRefill2 from "./detailimg/EzRefill2.jpg";
import EzRefill3 from "./detailimg/EzRefill3.jpg";
import EzRefill4 from "./detailimg/EzRefill4.jpg";
import EzRefill5 from "./detailimg/EzRefill5.jpg";

class Detail extends Component {
  state = {
    index: 1
  };

  componentDidMount() {
    window.onload = this.sliderHandler();
    document
      .getElementById("prevDet")
      .addEventListener("click", this.prevHandler);
    document
      .getElementById("nextDet")
      .addEventListener("click", this.nextHandler);
  }

  sliderHandler = () => {
    const slider = document.getElementsByClassName("detailSlide");
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
  prevHandler = () => {
    const slider = document.getElementsByClassName("detailSlide");
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
    const slider = document.getElementsByClassName("detailSlide");
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
  render() {
    let detailClass = "detail";
    if (this.props.detailOpen === true && this.props.drawerOpen === false) {
      detailClass = "detail open";
    }
    if (this.props.detailNumber === "1") {
      return (
        <div className={detailClass}>
          <div className="detailSlider">
            <div className="detailSlide">
              <img src={EzRefill} alt="EZ Refill" />
            </div>
            <div className="detailSlide">
              <img src={EzRefill2} alt="EZ Refill" />
            </div>
            <div className="detailSlide">
              <img src={EzRefill3} alt="EZ Refill" />
            </div>
            <div className="detailSlide">
              <img src={EzRefill4} alt="EZ Refill" />
            </div>
            <div className="detailSlide">
              <img src={EzRefill5} alt="EZ Refill" />
            </div>
            <div id="prevDet">
              <i className="fas fa-angle-left" />
            </div>
            <div id="nextDet">
              <i className="fas fa-angle-right" />
            </div>
          </div>
          <div className="detailtext">
            <h1>EZ Refill</h1>
            <h3>Making Medication Refills Easy</h3>
            <hr />
            <p>
              This is a full stack app, made using React, Redux, and fully
              incorporated Material-UI for design. Node.js was used for the
              back-end, MongoDB for the database. I used Express to create
              RESTful API's, and JWT for token generation. Feel free to play
              around the app. E-mail me for admin access.
            </p>
          </div>
          <div className="detailbuttons">
            <div
              onClick={() => window.open("https://ezrefill.herokuapp.com/")}
              className="detailsite"
            >
              View App
            </div>

            <div className="spacer" />
            <div className="x" onClick={this.props.click}>
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.detailNumber === "3") {
      return (
        <div className={detailClass}>
          <div className="detailimg">
            <img src={Weather} alt="Weather" />
          </div>
          <div className="detailtext">
            <h1>Weather App</h1>
            <h3>Weather </h3>
            <hr />
            <p>
              I built this weather app using Open Weather Map API. You can give
              the permission to give your location to find your current weather,
              or enter a valid U.S. zip-code.
            </p>
          </div>
          <div className="detailbuttons">
            <div
              onClick={() => window.open("https://ymoon715.github.io/Weather/")}
              className="detailsite"
            >
              View App
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/ymoon715/Weather/tree/master")
              }
              className="detailsite"
            >
              GitHub
            </div>
            <div className="spacer" />
            <div className="x" onClick={this.props.click}>
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.detailNumber === "2") {
      return (
        <div className={detailClass}>
          <div className="detailimg">
            <img src={Portimg} alt="portfolio" />
          </div>
          <div className="detailtext">
            <h1>Portfolio Page</h1>
            <h3>My official portfolio page</h3>
            <hr />
            <p>
              I built this portfolio with React and vanilla JavaScript. There
              are no additional libraries used in my portfolio.
            </p>
          </div>
          <div className="detailbuttons">
            <div
              onClick={() =>
                window.open("https://github.com/ymoon715/Portfolio/tree/master")
              }
              className="detailsite"
            >
              GitHub
            </div>
            <div className="spacer" />
            <div className="x" onClick={this.props.click}>
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.detailNumber === "4") {
      return (
        <div className={detailClass}>
          <div className="detailimg">
            <img src={LTRXone} alt="LTRX" />
          </div>
          <div className="detailtext">
            <h1>Little Tokyo Pharmacy</h1>
            <h3>Official pharmacy website</h3>
            <hr />
            <p>
              I made this for my pharmacy that I used to work at as a gratitude
              for all they have done for me. They had a very out-dated website
              design and I completely renovated it to look more modern. This
              website will be deployed on{" "}
              <a onClick={() => window.open("www.littletokyorx.com")}>
                www.littletokyorx.com
              </a>{" "}
              once it's finished. GitHub repo will be removed as soon as it is
              deployed.
            </p>
          </div>
          <div className="detailbuttons">
            <div
              onClick={() => window.open("https://ymoon715.github.io/LTRX/")}
              className="detailsite"
            >
              Website
            </div>
            <div
              onClick={() => window.open("https://github.com/ymoon715/LTRX/")}
              className="detailsite"
            >
              GitHub
            </div>
            <div className="spacer" />
            <div className="x" onClick={this.props.click}>
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.detailNumber === "5") {
      return (
        <div className={detailClass}>
          <div className="detailimg">
            <img src={Drum} alt="LTRX" />
          </div>
          <div className="detailtext">
            <h1>Drum Machine</h1>
            <h3>Drum Machine</h3>
            <hr />
            <p>
              I used React to build this fully functioning drum machine. In the
              future, I will be adding functionality such as looping and
              recording.
            </p>
          </div>
          <div className="detailbuttons">
            <div
              onClick={() =>
                window.open("https://ymoon715.github.io/drummachine/")
              }
              className="detailsite"
            >
              View App
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/ymoon715/drummachine/")
              }
              className="detailsite"
            >
              GitHub
            </div>
            <div className="spacer" />
            <div className="x" onClick={this.props.click}>
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.detailNumber === "6") {
      return (
        <div className={detailClass}>
          <div className="detailimg">
            <img src={Calculator} alt="Calculator" />
          </div>
          <div className="detailtext">
            <h1>Calculator</h1>
            <h3>First project</h3>
            <hr />
            <p>
              I created this calculator as my first project. It was also my
              first react project, my favorite framework.
            </p>
          </div>
          <div className="detailbuttons">
            <div
              onClick={() =>
                window.open("https://ymoon715.github.io/calculator/")
              }
              className="detailsite"
            >
              View App
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/ymoon715/calculator/")
              }
              className="detailsite"
            >
              GitHub
            </div>
            <div className="spacer" />
            <div className="x" onClick={this.props.click}>
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Detail;
