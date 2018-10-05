import React, { Component } from "react";
import "./Portfolio.css";
import Work from "./Work/Work";
import LTRX from "./Work/LTRX.jpg";
import Drum from "./Work/DrumMachine.jpg";
import Portfolios from "./Work/Portfolio.jpg";
import Calculator from "./Work/Calculator.jpg";
import Weather from "./Work/Weather.jpg";
import EzRefill from "./Work/EzRefill.jpg";
const workList = [
  {
    image: EzRefill,
    alt: "EzRefill",
    title: "EZ Refill",
    tech:
      "React, JavaScript, Node.js, Redux, MongoDB, Express, Passport, JWT, Material-UI"
  },
  {
    image: Portfolios,
    alt: "Portfolio",
    title: "My Personal Portfolio",
    tech: "React, JavaScript, Node.js"
  },
  {
    image: Weather,
    alt: "Weather",
    title: "Weather App",
    tech: "React, JavaScript"
  },

  {
    image: LTRX,
    alt: "Little Tokyo Pharmacy",
    title: "Little Tokyo Pharmacy",
    tech: "React, Redux, JavaScript"
  },
  {
    image: Drum,
    alt: "Drum Machine",
    title: "Drum Machine",
    tech: "React, JavaScript"
  },
  {
    image: Calculator,
    alt: "Calculator",
    title: "Calculator",
    tech: "React, JavaScript"
  }
];

class Portfolio extends Component {
  componentDidMount() {
    document.addEventListener("scroll", this.portfolioTitleHandler);
    document.addEventListener("scroll", this.workFadeHandler);
  }
  portfolioTitleHandler = () => {
    const portfolio = document.getElementById("portfolio").offsetTop - 600;
    if (
      document.body.scrollTop > portfolio ||
      document.documentElement.scrollTop > portfolio
    ) {
      document.getElementById("porthead").className = "porthead";
      document.getElementById("portfoliounderline").className =
        "portfoliounderline";
    }
  };
  workFadeHandler = () => {
    const portfolio = document.getElementById("portfolio").offsetTop - 300;
    if (
      document.body.scrollTop > portfolio ||
      document.documentElement.scrollTop > portfolio
    ) {
      document.getElementById("slides-animation").className = "portfolioslides";
    }
  };

  render() {
    return (
      <div id="portfolio" className="portfolio">
        <div className="portfoliotitle">
          <h2 id="porthead" className="porthead-clear">
            Portfolio.
          </h2>
          <div id="portfoliounderline" className="underline-clear" />
        </div>
        <div id="slides-animation" className="slides-clear">
          {workList.map((el, i) => (
            <Work
              key={i}
              value={el.value}
              image={el.image}
              alt={el.alt}
              title={el.title}
              tech={el.tech}
              click={this.props.click}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
