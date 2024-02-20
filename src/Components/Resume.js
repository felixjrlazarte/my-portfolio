import React, { Component } from "react";
import Zmage from "react-zmage";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
          <p>Achievements</p>
          {
            education.achievements.map(({ title, dateIssued }) => (
              <p className="achievements">
                <span>&bull;</span>
                {title} <span>&bull;</span>
                <em className="date">{dateIssued}</em>
              </p>
            ))
          }
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          {
            work.description && work.description.map(item => (
              <p className="workdescription">{item}</p>
            ))
          }
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      let skillImage = "images/skills/" + skills.image;

      return (
        <div>
          <Zmage alt={skills.name} src={skillImage} width={50} />
          <div>{skills.name}</div>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              padding: "20px"
            }}
            >
              {skills}
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
