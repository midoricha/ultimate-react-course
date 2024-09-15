import { useState } from 'react';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const today = new Date();

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(today);

  function incrementStep() {
    setStep((s) => s + 1);
  }

  function decrementStep() {
    setStep((s) => s - 1);
  }

  function incrementCount() {
    setCount((c) => c + 1 * step);

    const newDate = currentDate;
    const dateNumber = currentDate.getDate();
    newDate.setDate(dateNumber + 1 * step);

    setCurrentDate((d) => newDate);
  }

  function decrementCount() {
    setCount((c) => c - 1 * step);

    const newDate = currentDate;
    const dateNumber = currentDate.getDate();
    newDate.setDate(dateNumber - 1 * step);

    setCurrentDate((d) => newDate);
  }

  return (
    <>
      <Toggler
        name='Step'
        value={step}
        incrementFn={incrementStep}
        decrementFn={decrementStep}
      />
      <Toggler
        name='Count'
        value={count}
        incrementFn={incrementCount}
        decrementFn={decrementCount}
      />
      <p> {count !== 0 && Math.abs(count)}
        {count > 0 && ' days from now is '}
        {count < 0 && ' days ago was '}
        {count === 0 && 'Today is '}
        {currentDate.toDateString()}</p>
    </>
  )
}

function Toggler(props) {
  return (
    <div>
      <button onClick={props.decrementFn}>-</button>
      {props.name}: {props.value}
      <button onClick={props.incrementFn}>+</button>
    </div>
  )
}