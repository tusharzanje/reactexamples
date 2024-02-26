import { Component } from "react";

import "./App.css";
import "./Persons/person.css"
import Person from "./Persons/Persons";

class App extends Component {

  state = {
    persons: [
      { name: 'Bravo', age: 30 },
      { name: 'alfa', age: 35 },
      { name: 'Disel', age: 32 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Button is clicked...');
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'AlfaUp', age: 31 },
        { name: 'DiselUp', age: 321 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    console.log('event...', event.target.value);
    this.setState({
      persons: [
        { name: 'Bravo', age: 31 },
        { name: event.target.value, age: 31 },
        { name: 'DiselUp', age: 321 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    console.log(doesShow, this.state.showPersons);
  }


  render() {
    const style = {
      backgroundColr: 'white',
      font: 'inherit',
      border: '8 px',
      cursor: 'pointer'
    };


    let pers = null;

    if (this.state.showPersons) {
      pers = (
        <div>
          {this.state.persons.map(p => {
            return <Person name={p.name} age={p.age} />
          })}
        </div>
      )
    }
    return (
      <div className="Person">
        <h1>
          Hi This is my first react app
        </h1>

        <button style={style} onClick={() => this.togglePersonHandler()}>Click Here!</button>
        {pers}
      </div>
    )

  }
}

export default App;