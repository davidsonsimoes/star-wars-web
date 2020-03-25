import React, { Component } from 'react'
import 'whatwg-fetch';

export const SwapiContext = React.createContext({})

export default class SwapiProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: []
    }
  }

  // https://swapi.co/api/people/?page=1

  getPeople = (page) => {
    if(page !== ""){
      fetch(`https://swapi.co/api/people/?page=${page}`)
      .then( response => response.json() )
      .then( json => this.setState({ people: json.results }, ( ) => {
        console.log("Result: ", this.state.people)
        }))
    }  
  }

  render() {
    const value = {
      state: { ...this.state },
      action: {
        getPeople: this.getPeople
      }
    };
  
    return (
      <SwapiContext.Provider value={value}>
        {this.props.children}
      </SwapiContext.Provider>
    )

  }
}