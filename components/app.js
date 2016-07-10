import React, { Component } from 'react'
import { getAll } from '../db'

class App extends Component {

  constructor (props) {
    super(props)
  }

  showData(){
    getAll()
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.error('Error in app.js', error)
    })
  }

  render () {
    return (
        <div onClick={this.showData.bind(this)}>
            <h1>Welcome to {this.props.name}</h1>
        </div>
    )
  }

}

export default App
