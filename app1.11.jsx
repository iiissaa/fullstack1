import React, { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  
  const average = all > 0 ? (good-bad)/ all : 0;
  const positive = all > 0 ? (good / all) * 100 : 0;

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
     <Button text="hyvä" onClick={handleGoodClick} />
      <Button text="ok" onClick={handleNeutralClick} />
      <Button text="huono" onClick={handleBadClick} />
      
      <br /><br />
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
      <div>
    

      <table>
            
              <tr>
                <td>Hyvä</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>Ok</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>Huono</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>Kaikki</td>
                <td>{all}</td>
              </tr>
              <tr>
                <td>Keskiverto</td>
                <td>{average}</td>
              </tr>
              <tr>
                <td>Positiivisia</td>
                <td>{positive}%</td>
              </tr>
            
          </table>
      
        </div>
      )}
        </div>
    );
  };


export default App;
