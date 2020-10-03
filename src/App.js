import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {name: 'Sharad', age: 26},
      {name: 'Avi', age: 28},
      {name: 'Jabya', age: 24}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Sharad Shinde', age: 26},
        {name: 'Avinash Mali', age: 28},
        {name: 'Aditya Madole', age: 24}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].name}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name}>Hobbies: Watching Anime</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name}/>
      </div>
    );
  }
}

export default App;
