import React, { Component } from 'react';

import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Backdrop from './components/Portfolio/Work/Backdrop'
import Detail from './components/Portfolio/Work/Details'
import Drawer from './components/Navigation/Drawer/Drawer'
import Footer from './components/Footer/Footer'


class App extends Component {
  state = {
    detailOpen: false,
    detailNumber: "1",
    drawerOpen: false
  }

  componentDidMount() {
    document.getElementsByClassName("learnmore")[0].addEventListener("click", this.detailoneHandler);
    document.getElementsByClassName("learnmore")[1].addEventListener("click", this.detailtwoHandler);
    document.getElementsByClassName("learnmore")[2].addEventListener("click", this.detailthreeHandler);
    document.getElementsByClassName("learnmore")[3].addEventListener("click", this.detailfourHandler);
    }
  

  backdropHandler = () => {
    this.setState((prevState) => {
      return {detailOpen: !prevState.detailOpen}
    })
    if (this.state.drawerOpen === true){
      this.setState({drawerOpen: false})
    }
  }

  detailoneHandler = () => {
    this.setState({ detailNumber: "1"})
    this.backdropHandler();
  }
  
  detailtwoHandler = () => {
    this.setState({ detailNumber: "2"})
    this.backdropHandler();
  }

  detailthreeHandler = () => {
    this.setState({ detailNumber: "3"})
    this.backdropHandler();
  }
  detailfourHandler = () => {
    this.setState({ detailNumber: "4"})
    this.backdropHandler();
  }
  drawerHandler = () => {
    this.setState({detailOpen: true, drawerOpen: true})
  }
  
  render() {
    let backdrop;
    if (this.state.detailOpen) {
      backdrop = <Backdrop click={this.backdropHandler} />;
    }
    return (
      <div className="App">
        {backdrop}
        <Home />
        <Toolbar click={this.drawerHandler} />
        <Drawer drawerOpen={this.state.drawerOpen} detailOpen={this.state.detailOpen} click={this.backdropHandler} />
        <Detail click={this.backdropHandler} drawerOpen={this.state.drawerOpen} detailOpen={this.state.detailOpen} detailNumber={this.state.detailNumber} />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}


export default App;
