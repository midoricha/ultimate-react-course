import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import reportWebVitals from './reportWebVitals';

const skillsArray = [
  {
    skill: "HTML+CSS",
    level: "Advanced",
    color: "brown"
  },
  {
    skill: "Angular",
    level: "Advanced",
    color: "lightblue"
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "pink"
  },
  {
    skill: "Java Spring Boot",
    level: "Intermediate",
    color: "violet"
  },
  {
    skill: "React",
    level: "Beginner",
    color: "beige"
  },
  {
    skill: "CI/CD",
    level: "Intermediate",
    color: "teal"
  },
]

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <div className='avatar'>
      <img className='avatar' src="programmer2.jpeg" alt="Programmer" />
    </div>
  )
}

function Intro() {
  return (
    <div>
      <h1>Leah Wan</h1>
      <p>I am a software developer and a content creator. </p>
    </div>
  )
}

function SkillList() {
  const skills = skillsArray;
  console.log(skills)

  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill
          skillObj={skill}
          key={skill.skill}
        />
      ))}
    </div>
  )
}

function Skill({ skillObj }) {
  return (
    <div className='skill' style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "Advanced" && "😆"}
        {skillObj.level === "Intermediate" && "😃"}
        {skillObj.level === "Beginner" && "😊"}
      </span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
