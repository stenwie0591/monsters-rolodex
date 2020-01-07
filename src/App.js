import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render () {
    const { monsters, searchField } = this.state; // questa cosa è chiamata 'destrutturazione' o 'Destructuring' !!!
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) // metodo per filtrare la ricerca!!
    );

    return (
      <div className="App">
        <SearchBox
          placeholder='Search Monsters' 
          handleChange={(e) => {
            this.setState({ searchField: e.target.value }, () => 
              console.log(this.state) // questa è una callback -> è importante per dare sincronicità ad una funzione!!!
            )}}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
