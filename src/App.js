import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(monsters => this.setState({'monsters': monsters}))

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const monsters = await response.json()

    this.setState({monsters: monsters})
  }

  searchMonster = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeHolder={'Search Monster'} evtHandler={this.searchMonster} />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
