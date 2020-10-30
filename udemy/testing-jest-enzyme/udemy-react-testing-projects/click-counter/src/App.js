import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [warning, setWarning] = React.useState(false)

  const decrementHandler = () => {
    if (count == 0) {
      setWarning(true)
    } else {
      setCount(count - 1)
    }
  }

  const incrementHandler = () => {
    setWarning(false)
    setCount(count + 1)
  }

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{count}</span></h1>
      { warning
        ? <p data-test="warning">You cannot decrease the count below 0</p>
        : null
      }
      <button
        data-test="increment-button"
        onClick={incrementHandler}>INCREMENT!
      </button>
      <button
        data-test="decrement-button"
        onClick={decrementHandler}>DECREMENT!
      </button>
    </div>
  );
}

export default App;
