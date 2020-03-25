import React, { Component } from 'react'
import 'whatwg-fetch';

export const SwapiContext = React.createContext({})

export default class SwapiProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      isLoading: true,
      starships: [],
      isLoadingstarships: true,
      films: [],
      isLoadingfilms: true,
      species: [],
      isLoadingspecies: true
    }
  }

  getPeople = (page) => {
    this.setState({ 
      isLoading: true,
      starships: [],
      isLoadingstarships: true,
      films: [],
      isLoadingfilms: true,
      species: [],
      isLoadingspecies: true })
    if(page !== ""){
      fetch(`https://swapi.co/api/people/?page=${page}`)
      .then( response => response.json() )
      .then( json => this.setState({ people: json.results, isLoading: false }))
    }  
  }


  getUrl = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json
  }

  getAsyncContent = async (name, urls) => {
    let allItens = [];
    await Promise.all(
      urls.map(async user => {
        const userId = await this.getUrl(user)
        allItens.push(userId)
      })
    )
    this.setState({
      [name]: allItens,
      [`isLoading${name}`]: false
    });
  }

  render() {
    const value = {
      state: { ...this.state },
      action: {
        getPeople: this.getPeople,
        getAsyncContent: this.getAsyncContent
      }
    };
  
    return (
      <SwapiContext.Provider value={value}>
        {this.props.children}
      </SwapiContext.Provider>
    )

  }
}