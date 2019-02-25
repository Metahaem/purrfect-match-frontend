import React, { Component } from 'react';
import PetCard from "./PetCard.js"

const petsUrl = 'http://localhost:3000/api/v1/pets'

class Adopter extends Component {
    state = {
        pets: [],
        currentPet: {},
        }


    getPetsFromAPI = () => {
        return fetch(petsUrl)
        .then(res => res.json())
        }

    componentDidMount () {
        this.getPetsFromAPI()
        .then(allPets => {
            this.setState({
            pets: allPets,
            currentPet: allPets[0]
          })
      })
    }


    render () {
        return (
            <PetCard pet = {this.state.currentPet}/>
        )
    }
}  

export default Adopter