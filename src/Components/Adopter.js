import React, { Component } from 'react';
import PetCard from "./PetCard.js"


const petsUrl = 'http://localhost:3000/api/v1/pets'

class Adopter extends Component {
    state = {
        pets: [],
        currentPet: {},
        }

    handleLike = () => {
        console.log("Liked!")
        const targetPetID = this.state.currentPet.id
        const targetPet = this.state.pets.find(pet => pet.id === targetPetID)
        // add to likes in state
        // add to likes in API
        const targetPetIndex = this.state.pets.findIndex(targetPet)
    }

    handleReject = () => {
        console.log("rejected!")
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
            <PetCard className="buddy" 
            pet={this.state.currentPet}
            handleLike={this.handleLike}
            handleReject={this.handleReject}

            />
        )
    }
}  

export default Adopter