import React from 'react';

const Header = (props) => {
  const linkedInURL = 'https://www.linkedin.com/in/matthew-whitaker-6a0733191/';
  const gitHubURL = 'https://github.com/MatthewWhitaker1';

  return (
    <div class="ui center aligned basic segment">
      <h1>{props.name}</h1>
      <img
        class="ui medium circular centered image"
        src="images/profPic.jpg"
        alt="Profile"
        style={{ width: props.profilePicWidth }}
      />
      <h1>Software Developer</h1>

      <button class="ui linkedin button">
        <i class="linkedin icon"></i>
        LinkedIn
      </button>

      <button class="ui github button">
        <i class="github icon"></i>
        GitHub
      </button>

      <div class="ui section divider"></div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div class="ui two column centered grid">
        <div class="column">
          <h1>About</h1>
          <p>
            I am currently a graduate software developer at Apak Group and have
            recently graduated from the University of Bristol with a Batchelors
            degree in Mathematics.
          </p>
          <p>
            My interests include front-end web development, artificial
            intelligence, applied mathematics and extreme sports such as
            whitewater kayaking and mountain biking.
          </p>

          <div class="ui section divider"></div>

          <h1>Experience</h1>
          <ul>
            <li>
              Freelance Web Developer: <b>2018-2021</b>
            </li>
            <li>
              Graduate Software Developer at Apak Group: <b>Current</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div>
      <Header name="Matthew Whitaker" profilePicWidth={150} />
      <About />
    </div>
  );
};
