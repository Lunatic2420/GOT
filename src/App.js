import React, {Component} from 'react';
import axios from 'axios'
import Characters from './components/Characters'
import {CLIENT_URL} from './constants'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      characters: [],
      page: 1
    }
this.fetchCharacters=this.fetchCharacters.bind(this)
this.previousPage=this.previousPage.bind(this)
this.nextPage=this.nextPage.bind(this)
  }
  
  async fetchCharacters() {
    const response = await axios(CLIENT_URL)
    console.log(response.data)
    this.setState({
        characters: response.data
    })
}
componentDidMount() {
  this.fetchCharacters();
}
async previousPage(){
  const page = this.state.page - 1;
  let url= "https://www.anapioficeandfire.com/api/characters?"
  const GOTcharacter = await axios(`${url}page=${page}&pageSize=50`)
  console.log(GOTcharacter)
  this.setState({
    page, characters: GOTcharacter.data
  })
}
async nextPage(){
  const page = this.state.page + 1;
  let url ="https://www.anapioficeandfire.com/api/characters?"
  const GOTcharacter = await axios(`${url}page=${page}&pageSize=50`)
  console.log(GOTcharacter)
  this.setState({
    page, characters: GOTcharacter.data
  })
}
  render(){
    return (
        <div className="App">
          <div>
            <h1 className='title'>Welcome To Westeros</h1>
          </div>
             <div className="buttons">
            <button onClick={this.previousPage}>Previous </button>
            <button onClick={this.nextPage}>Next</button>
          </div>
        <div className="box-title">
           <h2>Name</h2>
           <h2>Gender</h2>
           <h2>Culture</h2>
        </div>
        <ol>
        {this.state.characters.map(character => (<Characters character={character} key={character.url} />
        ))}
          </ol>
        </div>  
    
  );
  }
}

export default App;
