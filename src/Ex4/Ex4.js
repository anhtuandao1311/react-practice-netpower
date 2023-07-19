import './Ex4.css';
import { useState } from "react";

function Ex4() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="Ex4-container">
      <h1>Button has been clicked: {counter} times</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Ex4