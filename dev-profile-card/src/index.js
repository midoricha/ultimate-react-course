import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import reportWebVitals from './reportWebVitals';

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
  return (
    <div className='skill-list'>
      <Skill skillName='Angular' color='lightblue' />
      <Skill skillName='Spring Boot' color='violet' />
      <Skill skillName='React' color='beige' />
      <Skill skillName='CI/CD' color='teal' />
      <Skill skillName='JavaScript' color='pink' />
    </div>
  )
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
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
