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

const Result = ({text, data}) => {
  return (
    <>{text} {data} <br /></>
  )
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
        <Result text={"good"} data={good}/>
        <Result text={"neutral"} data={neutral}/>
        <Result text={"bad"} data={bad}/>
        <Result text={"all"} data={total}/>
        <Result text={"average"} data={average()}/>
        <Result text={"positive"} data={positive()}/>

      </div>
    </div>
  )
}

export default App