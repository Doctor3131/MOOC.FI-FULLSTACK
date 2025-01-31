import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
} 

const Content = (props) => {
  return (
    <div>
        {props.anecdotes[props.selected]} <br />
        has {props.votes[props.selected]} votes<br />
    </div>
  )
}

const ContentMax = ({max, anecdotes, votes}) => {
  return (
    <div>
        {anecdotes[votes.indexOf(max)]} <br />
        has {max} votes<br />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  const max = Math.max(...votes)

  const nextRandom = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    while (random === selected) {
      random = Math.floor(Math.random() * anecdotes.length)
    }
    return setSelected(random)
  }

  const upVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  if (max === 0 || max === votes[selected])
    return (
      <>
        <Header title={"Anecdote of the day"}/>
        <Content anecdotes={anecdotes} votes={votes} selected={selected}/>
        <Button text={"vote"} onClick={upVote}/>
        <Button text={"next anecdote"} onClick={nextRandom}/>
      </>
    )
  else {
    return (
      <>
        <Header title={"Anecdote of the day"}/>
        <Content anecdotes={anecdotes} votes={votes} selected={selected}/>
        <Button text={"vote"} onClick={upVote}/>
        <Button text={"next anecdote"} onClick={nextRandom}/>
        <br />
        <Header title={"Anecdote with most votes"}/>
        <ContentMax anecdotes={anecdotes} votes={votes} max={max}/>
      </>
    )
  }
}

export default App