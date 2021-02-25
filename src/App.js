import './App.css';
import React, {useState} from 'react'

const array = []
for(let i = 0 ; i<9 ;i++)
    array[i] = (i+1)*-1

function App() {
 
  const check = () => {
  
    if(array[0] === array[1] && array[1] === array[2])
          return true;
    else if(array[0] === array[3] && array[3] === array[6])
          return true;
    else if(array[0] === array[4] && array[4] === array[8])
        return true 
    else if(array[3] === array[4] && array[4] === array[5])
        return true 
    else if(array[6] === array[7] && array[7] === array[8])
        return true 
    else if(array[1] === array[4] && array[4] === array[7])
        return true 
    else if(array[2] === array[5] && array[5] === array[8])
        return true 
    else if(array[2] === array[4] && array[4] === array[6])
        return true 
    
  }
  const [wonState, setwonState] = useState(0)
  const [toggle, setToggle] = useState(0)
  const [drawState, setDrawState] = useState(0)

  const reset = () => {
    for(let i = 0 ; i<9 ;i++)
       array[i] = (i+1)*-1

    for(let i = 1 ; i<=9; i++)
      document.getElementById(i.toString()).innerHTML = ""
    
      setwonState(0)
      setDrawState(0)

  }


  const handleClick = (e) => {
    if(e.target.innerHTML === 'X' || e.target.innerHTML === 'O')
      return;
    toggle === 0 ? setToggle(1) : setToggle(0)
  
    toggle === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O'
    array[e.target.id - 1] = toggle
    check() ? setwonState(1) : console.log('')
    if (array.every(x => x >= 0)) {
      setDrawState(1)

    }
    
  }

  return (
    <div className="App">

      {wonState? <h1 className = 'heading'>{toggle ? 'X won !' : 'O won !'}</h1> : <h1 className = ' heading '> {!toggle ?  " X's turn " : " O's turn "  } </h1>}
        <div className = 'row'>
            <div id = '1'  onClick = {wonState? undefined : handleClick}></div>
            <div id = '2'  onClick = {wonState? undefined : handleClick}></div>
            <div id = '3'  onClick = {wonState? undefined : handleClick}></div>
        </div>
        <div className = 'row'>
            <div id = '4'  onClick = {wonState? undefined : handleClick}></div>
            <div id = '5'  onClick = {wonState? undefined : handleClick}></div>
            <div id = '6'  onClick = {wonState? undefined : handleClick}></div>
        </div>
        <div className = ' row'>
            <div id = '7' onClick = {wonState? undefined : handleClick}></div>
            <div id = '8' onClick = {wonState? undefined : handleClick}></div>
            <div id = '9' onClick = {wonState? undefined : handleClick}></div>
        </div>
        <div className = 'row buttonholder'>
            {wonState || drawState? <button className = 'resetbtn' onClick = {reset}>Reset</button> : undefined}
        </div>

    </div>
  );
}

export default App;
