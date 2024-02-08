
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
    if (counter >= (mult*10)) {
    setCounter(prevCounter => prevCounter - (mult*10));
    setmult(mult => mult + .1)
    }
  }
  
  return (
    <div className="App">
      <div class = "buttons">
        <div class ="button1">
          <img className="button-img" src = {butto} alt = "butto" ></img>
          <div class = "centered"> Cookies : {Math.ceil(counter)}</div>
        </div>
        <div class ="button1">
          <img className="button-img" onClick = {clickupgrade} src = {butto} alt = "butto" ></img>
          <div class = "centered" > Upgrade 1 : {Math.ceil(upgrade)} ({Math.ceil(upgrade-1)})</div>
        </div>
        <div class ="button1">
          <img className="button-img" onClick={clickmult} src = {butto} alt = "butto" ></img>
          <div class = "centered"> Upgrade 2 : {Math.ceil(mult*10)} ({Number(mult.toFixed(1))})</div>
        </div>
        

      </div>
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
