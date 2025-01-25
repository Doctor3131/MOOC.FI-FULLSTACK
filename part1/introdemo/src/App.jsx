import { useState } from "react"

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({onClick, text}) => {
//   return (
//     <button onClick={onClick}>{text}</button>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClicks = () => {
//     setAll(allClicks.concat('L'))
//     const updateLeft = left + 1
//     setLeft(updateLeft)
//     setTotal(updateLeft + right)
//   }

//   const handleRightClicks = () => {
//     setAll(allClicks.concat('R'))
//     const updateRight = right + 1
//     setRight(updateRight)
//     setTotal(updateRight + left)
//   }

//   const reset = () => {
//     setLeft(0)
//     setRight(0)
//     setTotal(0)
//     setAll([])
//   }

//   return (
//     <div>
//       {left}
//       {/* <button onClick={handleLeftClicks}>left</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={handleRightClicks}>right</button> */}
//       <Button onClick={handleLeftClicks} text={'Left'}></Button>
//       <Button onClick={reset} text={'Reset'}></Button>
//       <Button onClick={handleRightClicks} text={'right'}></Button>
//       {right}
//       <p>total: {total}</p>
//       <History allClicks={allClicks}/>
//     </div>
//   )

// }

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <Button onClick={() => setToValue(1000)} text="thousand"/>
      <Button onClick={() => setToValue(0)} text="reset" />      
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}


export default App