import { useState } from "react";

export default function Player({ initialName, symbol, isActive}) 
{  
  const[playerName, setPlayerName] = useState(initialName);
  const[isEditing, setIsEditing] = useState(false);
  
  function editHandle(){
    setIsEditing((editing) => !editing);
  }

  function handleChange(event){
    console.log(event);
    setPlayerName(event.target.value);
  }
  
  let editablePlayer = <span className="player-name">{playerName}</span>

  if (isEditing){
    editablePlayer = <input type="text" required value={playerName} onChange={handleChange}/>
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandle}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}