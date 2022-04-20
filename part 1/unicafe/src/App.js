import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>
        Give Feedback
      </h2>
      <Button handleClick={() => setGood(good + 1)} text='Good'/>
      <Button handleClick={() => setBad(bad + 1)} text='Bad'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )

}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {

  if ((good !== 0) || (bad !== 0) || (neutral !== 0)){
  
  const getAll = () => {
    return good + neutral + bad
  }

  const getAverage = () => {
    return (good + (neutral*0) + (bad*-1))/getAll()
  }

  const getPosPercentage= () => {
    return `${(good/getAll())*100}%`
  }

  return (
    <>
      <h2>
        Statistics
      </h2>
      <table>
        <thead>
        </thead>
        <tbody>
          <StatisticLine text='Good: ' value={good}/>
          <StatisticLine text='Neutral: ' value={neutral}/>
          <StatisticLine text='Bad: ' value={bad}/>
          <StatisticLine text='All: ' value={getAll()}/>
          <StatisticLine text='Average: ' value={getAverage()}/>
          <StatisticLine text='Positive: ' value={getPosPercentage()}/>
        </tbody>
      </table>
    </>
  )
  }
  else{
    return (
      <>
        <h2>
          Statistics
        </h2>
        <p>
          No feedback given
        </p>
      </>
    )
  }
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
    </>
  )
}

export default App