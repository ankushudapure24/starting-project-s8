import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();
   
  const [enterdPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmited] = useState('false');
  
  // function handleChange(event) {
  //   setSubmited(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }


  return (
    <section id="player">
      <h2>Welcome  {enterdPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input 
          ref={playerName} 
          type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
