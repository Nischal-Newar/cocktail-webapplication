import React, { Component } from 'react'
import {Dropdown, DropdownButton, Button} from 'react-bootstrap'
import {InputGroup, FormControl} from 'react-bootstrap'
import {Container, Jumbotron} from 'react-bootstrap'
import CocktailAPI from './CocktailAPI'

 class SearchCocktail extends Component {

    //set the variables
    constructor(props) {
        super(props)
        this.state = {
             dropdownValue: 'Find Cocktail By',
             cocktailValue: '',
             searchresults: ''
        }
    }
    
    // To change the dropdown value
    changeValue(value){
        this.setState({
            dropdownValue: value
        })
    }

    // To change the cocktailvalue
    setCocktailValue = (e) =>{
        this.setState({
            cocktailValue: e.target.value
        })
    }

    // To search all the cocktails
    searchCocktail = () =>{
        console.log(this.state)
        const result = <CocktailAPI search={this.state}/>
        this.setState({
            searchresults: result
        })
    }

    
    render() {
        return (
            <React.Fragment>
                <Container>
                <Jumbotron>
                    <InputGroup className="mb-3">
                        <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title={this.state.dropdownValue} id="input-group-dropdown-1">
                            <Dropdown.Item onClick={(e) => this.changeValue(e.target.textContent)}>Name</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.changeValue(e.target.textContent)}>Ingredient</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.changeValue(e.target.textContent)}>Category</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" onChange={this.setCocktailValue}/>
                        <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.searchCocktail}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Jumbotron>
                </Container>
                <h1>{this.state.searchresults}</h1>
            </React.Fragment>
        )
    }
}

export default SearchCocktail;
