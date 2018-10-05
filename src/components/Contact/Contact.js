import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./Contact.css";

const styles = () => ({
  textField: {
    width: 320
  },
  submitButton: {
    color: "#fff",
    background: "#d8364c"
  }
});

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  componentDidMount() {
    document.addEventListener("scroll", this.contactTitleHandler);
    document.addEventListener("scroll", this.iconFadeHandler);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  messageToggler = () => {
    const message = document.getElementById("message-sent").style.display;
    if (message === "") {
      document.getElementById("message-sent").style.display = "block";
    } else {
      document.getElementById("message-sent").style.display = "";
    }
  };

  onSubmit = e => {
    const { name, email, message } = this.state;
    e.preventDefault();

    axios.post("/api/form", { name, email, message });
    this.messageToggler();
  };

  contactTitleHandler = () => {
    const contactH = document.getElementById("contact").offsetTop - 550;
    if (
      document.body.scrollTop > contactH ||
      document.documentElement.scrollTop > contactH
    ) {
      document.getElementById("conthead").className = "contact-header";
      document.getElementById("contact-underline").className =
        "contact-underline";
    }
  };
  iconFadeHandler = () => {
    const contactH = document.getElementById("contact").offsetTop - 450;
    if (
      document.body.scrollTop > contactH ||
      document.documentElement.scrollTop > contactH
    ) {
      document.getElementById("contact-container").className =
        "contact-container-appear";
    }
  };

  render() {
    const { classes } = this.props;
    const { name, email, message } = this.state;
    return (
      <section id="contact" className="contact">
        <div className="contact-title">
          <h2 id="conthead" className="cont-clear">
            Contact.
          </h2>
          <div id="contact-underline" className="contact-clear" />
        </div>
        <div id="contact-container" className="contact-container">
          <h3>How do you take your coffee?</h3>
          <form onSubmit={this.onSubmit}>
            <TextField
              required
              label="Name"
              value={this.state.name}
              onChange={this.onChange}
              name="name"
              type="text"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />
            <br />
            <TextField
              required
              label="E-mail"
              value={this.state.email}
              onChange={this.onChange}
              name="email"
              type="email"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />
            <br />
            <TextField
              required
              label="Message"
              multiline
              rows="8"
              value={this.state.message}
              onChange={this.onChange}
              name="message"
              type="text"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />
            <br />
            <div id="message-sent" onClick={this.messageToggler}>
              <p>Message Sent!</p>
            </div>
            <Button
              disabled={
                name.length === 0 || email.length === 0 || message.length === 0
              }
              variant="contained"
              className={classes.submitButton}
              type="submit"
              name="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Contact);
