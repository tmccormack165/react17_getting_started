function Button() {
	//return <div>Hello React!</div>;
  //return React.createElement('div', null, 'Hi')
  const [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter+1)}>{counter}</button>
}



ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);

// *** The React 18 way:
// root.render(
//   <Hello />, 
// );