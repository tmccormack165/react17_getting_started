function Button(props) {
	return ( 
    <button onClick={props.incFunc}>
      +1
    </button>
  );
}

function Display(props) {
  return( <div> {props.message} </div> )
}

// App

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter+1)
  return (
  <React.Fragment>
    <Button incFunc={incrementCounter}/>
    <Display message={counter}/>
    
  </React.Fragment>
  );
}