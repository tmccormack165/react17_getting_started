function Button() {
	const [counter, setCounter] = useState(5);
  return <button onClick={() => setCounter(counter*2)}>{counter}</button>
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
