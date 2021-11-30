import './App.css';
import React from 'react';
import Timer from './components/Timer';

function App() {
  return (
    <>  
      <Timer 
      time={100000} 
      step={1000} 
      autostart={true} 
      onTick={(time) => console.log("Залишилось часу: " + time)}
      onTimeEnd={() => console.log("Час вийшов!")} 
      onTimeStart={() => console.log("Таймер запущено!")}
      onTimePause={() => console.log("Таймер на паузі!")}
      />  
    </>
  );
}

export default App;