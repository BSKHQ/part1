import {useState} from 'react'
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    function handleClickGood (){
        setGood(good+1)
    }
    function handleClickNeutral (){
        setNeutral(neutral+1)
    }
    function handleClickBad (){
        setBad(bad+1)
    }
    

    return (
      <div>
        <Header text='give feedback' />
        <Button text='good' handleClick={handleClickGood} />
        <Button text='neutral' handleClick={handleClickNeutral} />
        <Button text='bad' handleClick={handleClickBad} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    )
}

const Statistics =({good,neutral,bad})=>{
    function all(){
        return (good+neutral+bad)
    }

    function average(){
        return (all()/3)
    }

    function positive(){
        return (100*good/all())
    }

    if (all() === 0){
        return (
            <>
            <Header text='statistics' />
            <p>No feedback given</p>
            </>
        )
    }
    return(
        <>
        <Header text='statistics' />
        <table>
            <tbody>
        <StatisticLine rating='good' value={good}/>
        <StatisticLine rating='neutral' value={neutral}/>
        <StatisticLine rating='bad' value={bad}/>
        <StatisticLine rating='all' value={all(good)}/>
        <StatisticLine rating='average' value={average()}/>
        <tr><td>positive</td><td>{positive()}%</td></tr>
            </tbody>
        </table>
        </>
    )
}


const Header =({text})=> {
    return (<div><h1>{text}</h1></div>)
}

const StatisticLine =({rating, value})=> {
    return (<tr><td>{rating}</td><td>{value}</td></tr>)
}

const Button =({text, handleClick})=> {
    return (<button onClick={handleClick}>{text}</button>)
}

export default App