import { useState } from "react";

export default function Player({ name, symbol }) {
  
  const[isEditing, setIsEditing] = useState(false);
  
  function editHandle(){
    setIsEditing(!isEditing);
  }
  
  let player = <span className="player-name">{name}</span>

  if (isEditing){
    playerName = <input type="text" required/>
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandle}>Edit</button>
    </li>
  );
}