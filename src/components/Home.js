import React, { Component } from 'react'
import SearchCocktail from './cocktails/SearchCocktail'
import Nav from './Navigation'

export default class Home extends Component {
   render() {
        return (
            <React.Fragment>
                <Nav/>
                <SearchCocktail />
            </React.Fragment>
        )
    }
}
