import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [], 
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = e =>{
    this.setState({searchField: e.target.value});

  }

  render() {

    const { monsters, searchField } = this.state;
    // eslint-disable-next-line
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder= 'Search Here'
        handleChange={this.handleChange}
      />
      <CardList monsters = {filteredMonster} />
      
    </div>
    );
  }
}

export default App;

//test

