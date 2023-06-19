import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


function Button() {
	//return <div>Hello React!</div>;
  //return React.createElement('div', null, 'Hi')
  const [counter, setCounter] = useState(0);
  const [counter_incr, setCounter_incr] = useState(1);
  
  return <button onClick = {() => setCounter_incr(counter_incr + 1)}> Click me <button onClick={() => setCounter(counter+counter_incr)}>{counter}</button></button>
}



ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);