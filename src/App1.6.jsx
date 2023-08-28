import { useState } from 'react'




const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  return (
		<div>
			<button onClick = {() => setGood(good + 1)}>hyvä</button>
			<button onClick = {() => setNeutral(neutral + 1)}>ok</button>
			<button onClick = {() => setBad(bad + 1)}>huono</button>
		<br></br>
			<p>hyvä {good}</p>
			<p>ok {neutral}</p>
			<p>huono {bad}</p>
      <p>kaikki {good+neutral+bad}</p>
      <p>keskiarvo {(good-bad)/(neutral+good+bad)}</p>
      <p>positiivisia {(good)/(good + neutral + bad)*100}%</p>
		</div>
	)
}
export default App
