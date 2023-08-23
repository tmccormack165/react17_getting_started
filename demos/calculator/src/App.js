import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="board-label">
          My Calculator
        </h1>
        <div className="board">
          <div class='display '>
            <input type='text' onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength='12' class='content' value='12'></input>
          </div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <div className="button-row">
            <input type="button" name="" value="&radic;" class="global"></input>
            <input type="button" name="" value="(" class="global"></input>
            <input type="button" name="" value=")" class="global"></input>
            <input type="button" name="" value="%" class="global"></input>
          </div>
          <div className="button-row">
            <input type="button" name="" value="7" class="global"></input>
            <input type="button" name="" value="8" class="global"></input>
            <input type="button" name="" value="9" class="global"></input>
            <input type="button" name="" value="/" class="global"></input>
          </div>
          <div className="button-row">
            <input type="button" name="" value="4" class="global"></input>
            <input type="button" name="" value="5" class="global"></input>
            <input type="button" name="" value="6" class="global"></input>
            <input type="button" name="" value="X" class="global"></input>
          </div>
          <div className="button-row">
            <input type="button" name="" value="1" class="global"></input>
            <input type="button" name="" value="2" class="global"></input>
            <input type="button" name="" value="3" class="global"></input>
            <input type="button" name="" value="-" class="global"></input>
          </div>
          <div class="conflict">
            <div class="left">
              <input type="button" name="" value="0" class=" big"></input>
              <input type="button" name="" value="." class=" small"></input>
              <input type="button" name="" value="Del" class=" red small white-text top-margin"></input>
              <input type="button" name="" value="=" class=" green white-text big top-margin"></input>
            </div>
            <div class="right">
              <input type="button" name="" value="+" class="global grey plus"></input>
            </div>

          </div>


        </div>

      </header>
    </div>
  );
}

export default App;



