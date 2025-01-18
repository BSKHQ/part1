import { useState } from 'react'

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

  const [selected, setSelected] = useState(getRandomInt(0, anecdotes.length))

  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

  function nextAnecdote() {
    setSelected(getRandomInt(0, anecdotes.length))
  }

  function getRandomInt(min, max) {
    const minVal = Math.ceil(min)
    const maxVal = Math.floor(max)

    return (
      Math.floor(Math.random() * (maxVal - minVal) + minVal)
    )
  }

  function vote() {
    setVotes({ ...votes, [selected]: votes[selected] + 1 })
  }

  function mostVotes() {
    let mostVotes = 0
    let anecdote = 0
    for (const val in votes) {
      if (votes[val] > mostVotes) {
        mostVotes = votes[val]
        anecdote = val
      }
    }
    return ([mostVotes, anecdote])
  }

  return (
    <div>
      <Heading text='Anecdote of the day' />
      {anecdotes[selected]}
      <VoteCount votes={votes[selected]} />
      <Button text='vote' handleClick={vote} />
      <Button text='next anecdote' handleClick={nextAnecdote} />
      <Heading text='Anecdote with the most votes' />
      {anecdotes[mostVotes()[1]]}
      <VoteCount votes={mostVotes()[0]} />
    </div>
  )
}

const VoteCount = ({ votes }) => {
  if (votes === 1) {
    return (<div>Has {votes} vote</div>)
  }
  return (<div>Has {votes} votes</div>)
}

const Button = ({ text, handleClick }) => {
  return (
    <><button onClick={handleClick}>{text}</button></>
  )
}

const Heading = ({ text }) => {
  return (<h1>{text}</h1>)
}

export default App