import React, { Component } from 'react'
// import Character from './Character'

// const URL = 'https://anapioficeandfire.com/api/characters/'

class Characters extends Component {
    render() {
            if(this.props.character.name === " "){
                this.props.character.name = this.props.character.aliases[0];
            }
            return(  
        <main>
                <h3>{this.props.character.name}</h3>
                <h3>{this.props.character.gender}</h3>
                <h3>{this.props.character.culture}</h3> 
        </main>
            
        )
    }
}



export default Characters;