import React from 'react'
import {useState, useEffect} from 'react'
import {Card, CardColumns} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

export default function CocktailAPI({search}) {

    //Initialise the drink state using useState Hook
    const [drink, setdrinks] = useState({})
    var query=""

    //Switch the REST API depeding on the criteria. By default will provide the list of Alcoholic drinks detail
    switch(search.dropdownValue){
        case 'Ingredient' : query = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.cocktailValue}`
                            break;

        case 'Category' : query = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.cocktailValue}`
                            break;

        case 'Name' : query = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.cocktailValue}`
                            break;
        
        default : query = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
                            break;
    }
    
    //Call the REST API in case the query paramter has been updated
    useEffect(() => {
            fetch(`${query}`)
            .then(res => res.json())
            .then(result => {
                if(result.drinks.length)
                    setdrinks(result.drinks)
                else
                    setdrinks('')
            }).catch((error) => {
                setdrinks({ })
            });
    }, [query])
    
    
    //Return the list of Cocktails
    return (
        <React.Fragment>
            <Container>
                <CardColumns>
                {
                    drink.length?drink.map(info => 
                    <Card key={info.idDrink} border="dark">
                        <Card.Img variant="top" src={info.strDrinkThumb}/>
                        <Card.Body>
                            <Card.Title>{info.strDrink}</Card.Title>
                        </Card.Body>
                    </Card>
                    ):<Card key="00000" border="dark" className="text-center">
                        <Card.Img variant="top" src={"https://image.freepik.com/free-vector/hand-drawn-cocktail-collection_52683-41288.jpg"}/>
                        <Card.Body>
                            <Card.Title>No Cocktails Found</Card.Title>
                        </Card.Body>
                    </Card>
                }
                </CardColumns>
            </Container>
        </React.Fragment>
    )
}
