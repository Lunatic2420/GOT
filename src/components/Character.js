import React, {Component} from 'react'
import axios from 'axios'


class Character extends Component{
    constructor (props) {
        super(props)
        this.state= {
            characterInfo: []
        }
      this.fetchCharacters= this.fetchCharacters.bind(this)
        }
    
    
    render (){
        const characterInfo = this.state.characterInfo
        return(
            <div>
                <h3>Name:{characterInfo.name}</h3>
                <h3>Title:{characterInfo.title}</h3>
                <h3>Books:{characterInfo.book}</h3>
            </div>
        )
    }
}

export default Character;