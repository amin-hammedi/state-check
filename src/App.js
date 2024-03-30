import "./App.css";
import React, { Component } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoIcon from "@mui/icons-material/Info";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Skilljar from "./components/Skilljar";

export default class App extends Component {
  state = {
    count: 0,
    isShow: true,
    user: {
      baseInfo: {
        Name: "Mohamed Amin Hammedi",
        Job: "Frontend Web Developer",
        Phone: 54520445,
        FbHref: "https://www.facebook.com/amin.hammadi.77",
        LdnHref: "https://www.linkedin.com/in/hammedi-amin-a366772a1/",
        resume:
          "Mohammed Amin Hammedi a 15 years-old tunisian boy . As abeginner web developer, I bring a passion for crafting engaging and user-friendly websites using HTML, CSS, and JavaScript. Eager to broaden my skill set, I am dedicated  learning popular frameworks, such as REACT, to enhance my front-end development capabilities. Additionally, I have keen interest in venturing into backend web development to create robust and full-fledged web applications.",
      },
      skills: [
        { name: "HTML", width: "440px" },
        { name: "CSS", width: "330px" },
        { name: "JavaScript", width: "250px" },
        { name: "React", width: "100px" },
      ],
    },
  };

  handleClickShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.intervalID = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const {
      baseInfo: { Name, Job, Phone, FbHref, LdnHref, resume },
      skills,
    } = this.state.user;
    return (
      <div>
        {this.state.isShow && (
          <div className="App">
            <div className="left-side">
              <h1>{Name}</h1>
              <p>{Job}</p>
              <img
                src="https://gomycodelearndev.blob.core.windows.net/profiles/53a15495-1f8d-47f3-a6a3-de0b183d55e7-133402260658741884.jpg"
                alt="pdp"
              ></img>
              <div className="contact">
                <h3>Contact Me</h3>
                <div className="bth">
                  <PhoneIcon></PhoneIcon>
                  <p>{Phone}</p>
                </div>
                <div className="bth">
                  <FacebookIcon></FacebookIcon>
                  <a href={FbHref}>Facebook</a>
                </div>
                <div className="bth">
                  <LinkedInIcon></LinkedInIcon>
                  <a href={LdnHref}>LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="abt">
                <div className="bth">
                  <InfoIcon></InfoIcon>
                  <h2>About ME</h2>
                </div>
                <p>{resume}</p>
              </div>
              <div className="abt">
                <div className="bth">
                  <AddTaskIcon></AddTaskIcon>
                  <h2>Skills</h2>
                </div>
                {skills.map((skill, index) => (
                  <Skilljar key={index} name={skill.name} width={skill.width} />
                ))}
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
