import './App.css';
import React from 'react'


const tasks = ['Estudar', 'Ler', 'Fazer Pitch', 'Comer', 'Dormir']
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render(){
    return (
      <ol>
        {tasks.map((task) => Task(task))}
      </ol>
    );
  }
}

export default App;
