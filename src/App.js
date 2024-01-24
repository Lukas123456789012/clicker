
import './App.css';
import cokie from "./cookieimg.jpeg";

function App() {
  let counter = 0;
  return (
    <div className="App">
      <button>{counter}</button>
      <img 
      className='pokie' 
      src={cokie} 
      alt="help" 
      onClick={() => {
        clickHandler(counter)
      }}/>
    </div>
  );
}
function clickHandler( {counter} ) {
  counter += 1;
}

export default App;
