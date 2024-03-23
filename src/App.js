import "./App.css";
import React, { Component } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoIcon from "@mui/icons-material/Info";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default class App extends Component {
  state = {
    count: 0,
    isShow: true,
  };

  handleClickShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 0.5 }));
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        {this.state.isShow && (
          <div className="App">
            <div className="left-side">
              <h1>Med Amin Hammedi</h1>
              <p>frontend Web developer</p>
              <img
                src="https://gomycodelearndev.blob.core.windows.net/profiles/53a15495-1f8d-47f3-a6a3-de0b183d55e7-133402260658741884.jpg"
                alt="pdp"
              ></img>
              <div className="contact">
                <h3>Contact Me</h3>
                <div className="bth">
                  <PhoneIcon></PhoneIcon>
                  <p>54 520 445</p>
                </div>
                <div className="bth">
                  <FacebookIcon></FacebookIcon>
                  <a href="https://www.facebook.com/amin.hammadi.77">
                    {" "}
                    Facebook
                  </a>
                </div>
                <div className="bth">
                  <LinkedInIcon></LinkedInIcon>
                  <a href="https://www.linkedin.com/in/hammedi-amin-a366772a1/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="abt">
                <div className="bth">
                  <InfoIcon></InfoIcon>
                  <h2>About ME</h2>
                </div>
                <p>
                  Mohammed Amin Hammedi a 15 years-old tunisian boy . As a
                  beginner web developer, I bring a passion for crafting
                  engaging and user-friendly websites using HTML, CSS, and
                  JavaScript. Eager to broaden my skill set, I am dedicated to
                  learning popular frameworks, such as REACT, to enhance my
                  front-end development capabilities. Additionally, I have a
                  keen interest in venturing into backend web development to
                  create robust and full-fledged web applications.
                </p>
              </div>
              <div className="abt">
                <div className="bth">
                  <AddTaskIcon></AddTaskIcon>
                  <h2>Skills</h2>
                </div>
                <div class="skill-container">
                  <p class="skill-name">HTML</p>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "440px" }}></div>
                  </div>
                </div>
                <div class="skill-container">
                  <p class="skill-name">CSS</p>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "330px" }}></div>
                  </div>
                </div>
                <div class="skill-container">
                  <p class="skill-name">JavaScript</p>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "250px" }}></div>
                  </div>
                </div>
                <div class="skill-container">
                  <p class="skill-name">React</p>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "100px" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <button onClick={this.handleClickShow}>show</button>
        <h2 className="time">Time since mount: {this.state.count} seconds</h2>
      </div>
    );
  }
}
