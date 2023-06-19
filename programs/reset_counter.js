//Button
function Button(props) {
	return ( 
    <button onClick={() => props.onClickFunc(props)}>
      +{props.inc_amt}
    </button>
  );
}

//Reset
function Reset(props) {
  return (
    <button onClick={() => props.onClickFunc()} > 
      Reset
    </button>
  )
}

//Display
function Display(props) {
  return( <div> {props.message} </div> )
}

// App
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (props) => setCounter(counter+props.inc_amt)
  const resetCounter = () => setCounter(0)
  
  return (
  <React.Fragment>
    <Button onClickFunc={incrementCounter} inc_amt={1}/>
    <Button onClickFunc={incrementCounter} inc_amt={5}/>
    <Button onClickFunc={incrementCounter} inc_amt={10}/>
    <Button onClickFunc={incrementCounter} inc_amt={15}/>
    <Reset onClickFunc={resetCounter} />
    <Display message={counter}/>
  
  </React.Fragment>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);