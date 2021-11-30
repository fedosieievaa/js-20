import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';


const Timer = ({time, step, autostart, onTick, onTimeEnd, onTimeStart, onTimePause}) => { 
    let [minutes, setMinutes] = useState(+(time / 1000 / 60).toFixed());
    let [seconds, setSeconds] = useState(+(time / 1000 % 60).toFixed());
    let [stop, setStop] = useState(autostart);
    const button = () => {
      setStop((stop) => !stop);
      if (stop) {
        onTimePause();
      } else {
        onTimeStart();
      }
    }

    useEffect(() => {
      let myInterval;
      if (stop) {
        onTick(minutes + ":" + seconds);
        myInterval = setInterval(
           () => {
              if (seconds > 0) {
              setSeconds(seconds - (step / 1000));
              }
              if (seconds === 0) {
                if (minutes === 0) {
                  clearInterval(myInterval);
                } else {
                  setSeconds(59);
                  setMinutes(minutes - 1);
                  }
              } 
            }, step );
      }
      return () => clearInterval(myInterval);
      }, [seconds, minutes, step, stop, onTick]);

    return(
      <div className="container">
          <div className="time">{minutes === 0 && seconds === 0 ? <h1>Time is over! {onTimeEnd()}</h1> : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>}</div>
          <button className="toggle_btn" onClick={button}>{stop ? 'Stop' : 'Start'}</button>
      </div>
    )
}

export default Timer;