import {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  
  /*setTimeout(
    () => setCounter(counter + 1),
    1000
  )*/
  const course = {
    name: 'Half Stack application development',

    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },

      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
      {counter}
    </div>
  )
}

const Header = (props) => {
 // console.log(props.course.parts[0])
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts.parts[0]} />
      <Part part={props.parts.parts[1]} />
      <Part part={props.parts.parts[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
  )
}

const Part = (props) => {
 // console.log(props)
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}
export default App