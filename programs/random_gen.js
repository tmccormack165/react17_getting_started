function Button() {
	const [rval, rval_gen] = useState(Math.random());
  return <button onClick = {()=>rval_gen(Math.random())}>{rval}</button>;
}



ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);