import { useState } from "react"

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
} 

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  
  if (props.total === 0) 
    return (<>No feedback given</>)
  else {
    const average = (props.good - props.bad) / props.total
    const positive = (props.good / props.total) * 100
    
    return (
      <>
        good {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad} <br />
        total {props.total} <br />
        average {average} <br />
        positive {positive} % <br />
      </>
  )}
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClicks = () => {
    const updateGood = good + 1
    setGood(updateGood)
    console.log("good", updateGood)
    setTotal(updateGood + neutral + bad)
  }

  const handleNeutralClicks = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    console.log("neutral", updateNeutral)
    setTotal(updateNeutral + good + bad)
  }

  const handleBadClicks = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    console.log("bad", updateBad)
    setTotal(updateBad + neutral + good)
  }

  const average = () => {
    if (total === 0) return 0
    return ((good - bad) / total) 
  }

  const positive = () => {
    if (good === 0) return 0
    return (`${(good / total) * 100} %`) 
  }

  return (
    <div>
      <Header title={"give feedback"}/>
      <div id="button">
        <Button onClick={handleGoodClicks} text="good"/>
        <Button onClick={handleNeutralClicks} text="neutral"/>
        <Button onClick={handleBadClicks} text="bad"/>
      </div>
      <Header title={"statistics"}/>
      <div id="result">
        <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}/>
      </div>
    </div>
  )
}

export default App