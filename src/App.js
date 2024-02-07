
import './App.css';
import {useState} from 'react'
import cokie from "./cookieimg.jpeg";
import coki from "./download.jpeg";
import backgrnd from "./backgorund.png";
import butto from "./Button.jpg"
// <img 
//className = 'backrnd'
//src = {backgrnd}/> 
function App() {
  const [counter, setCounter] = useState(0);
  const [upgrade, setupgrade] = useState(1);
  const [mult, setmult] = useState(1);

  const clickHandler = () => {
    setCounter((prevCounter) => (prevCounter+upgrade)*mult);
  }
  const clickupgrade = () => {
    
    if (counter >= upgrade) {
    setCounter(prevCounter => prevCounter - upgrade);
    setupgrade((upgrade) => upgrade + 1); 
    }
  }
  const clickmult = () => {
    setmult(mult => mult + .1)
  }
  
  return (
    <div className="App">
      <div class = "buttons">
        <div class ="button1">
          <img className="button-img" src = {butto} alt = "butto" ></img>
          <div class = "centered">Centered</div>
        </div>


      </div>

      <li>{Math.ceil(counter)}</li>

      
      <button
      className = 'upgrade'
      onClick = {clickupgrade}
      >  {Math.ceil(upgrade)} </button>
      
      
      <button
      className = 'butt'
      onClick={clickHandler
      }
      > Press for cookie </button>
      
      <button
      className = 'mult'
      onClick={clickmult
      }
      >{mult} </button>
      
      
      <img 
      className='pokie' 
      src={coki} 
      alt="help" 
      onClick= {clickHandler}
      />
    </div>
  );
}


export default App;
