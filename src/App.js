
import './App.css';
import {useState} from 'react'
import cokie from "./cookieimg.jpeg";
import coki from "./download.jpeg";
import backgrnd from "./backgorund.png";
// <img 
//className = 'backrnd'
//src = {backgrnd}/> 
function App() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter((prevCounter) => prevCounter+1);
  }
  
  return (
    <div className="App">
      

      <li>{counter}</li>

      
      
      
      
      
      <button
      className = 'butt'
      onClick={clickHandler
      }
      > Press for cookie </button>
      
      
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
