import React, { Component } from 'react'
import 'whatwg-fetch';

export const SwapiContext = React.createContext({})

export default class SwapiProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      isLoading: true
    }
  }

  getPeople = (page) => {
    this.setState({ isLoading: true })
    if(page !== ""){
      fetch(`https://swapi.co/api/people/?page=${page}`)
      .then( response => response.json() )
      .then( json => this.setState({ people: json.results, isLoading: false }))
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