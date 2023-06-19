function AddOne(props) {
    return ( <button onClick = {props.onClickFunc}>
                +
             </button> );
  }
  
  function Double(props) {
    return( <button onClick = {props.onClickFunc}>
              x2
            </button>)
  }
  
  function Divide(props) {
    return( <button onClick = {props.onClickFunc}>
              ÷2
            </button>)
  }
  
  function Subtract(props) {
    return( <button onClick = {props.onClickFunc}>
              -
            </button>)
  }
  
  // Display Panel
  function Display(props){
    return <div>Value: {props.amt}</div>  
  }
  
  // Combine components in an application
  function App() {
    const [counter, setCounter] = useState(0);
    const add = () => setCounter( counter + 1 );
    const double = () => setCounter( counter * 2 );
    const divide = () => setCounter( counter / 2 );
    const subtract = () => setCounter( counter - 1 );
    
    return (
      <React.Fragment>
        <AddOne onClickFunc = {add} bt_amt = {counter}/>{" "}
        <Double onClickFunc = {double}/>{" "}
        <Divide onClickFunc = {divide}/>{" "}
        <Subtract onClickFunc = {subtract}/>
        <Display amt = {counter} />
        
      </React.Fragment>
    )
  }
  
  ReactDOM.render(
    <App />, 
    document.getElementById('mountNode'),
  );
  
  
  