import { useState, useRef} from "react";
import ResultModal from './ResultModal.jsx'

export default function TimerChallenge({title, targetTime}) {

    const timer = useRef();
    const dialog = useRef();

    // const [timerStarted, setTimerStrted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false); 

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);  
            // dialog.current.open();
        },10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return(
        <>
        <ResultModal 
         ref={dialog} 
         targetTime={targetTime} 
         remainingTime = {timeRemaining}
         onSubmit = {handleReset}
        />
        <section className="challenge">
            <h2>{title}</h2>
            {/* {timerExpired && <p>You lost !</p>} */}
            <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive? 'Stop': 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active': undefined}>
                {timerIsActive ? 'Time is running' : 'Timmer inactive'}
            </p>
        </section>
        </>
    );
}