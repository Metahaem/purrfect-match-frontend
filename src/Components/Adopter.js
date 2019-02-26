import React, { Component } from 'react';
import PetCard from "./PetCard.js"
import { get } from 'http';


const baseURL = 'http://localhost:3000/api/v1'
const petsUrl = 'http://localhost:3000/api/v1/pets'

class Adopter extends Component {
    state = {
        pets: [],
        currentPet: {},
        adopter: {id: 1},
        userCoordinates: {},
        }

    // getCoordinates = async (postcode) => {
    //     let coordinates = null
    //     const url = `https://eu1.locationiq.com/v1/search.php?key=eaf16e4cfa5a96&postalcode=${postcode}&format=json&countrycodes=gb`
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     coordinates = await {
    //         lat: data.lat,
    //         lon: data.lon
    //     };
    // }



    // calculateDistance = () => {
    //     let distance = [...this.state.distance]
    //     adopterCoordinates = ''
    //     petCoordinates = ''
    //     getCoordinates(this.state.currentPet.location)
    //     .then(getCoordinates(this.state.currentPet.location))
    // } 

    isSame

    handleLike = () => {
        console.log("liked!")
        const targetPetID = this.state.currentPet.id
        const targetPet = this.state.pets.find(pet => pet.id === targetPetID)
        // add to likes in state
        const targetPetIndex = this.state.pets.findIndex(pet => pet.id === targetPetID)
        // if 
        console.log(targetPetIndex)
        this.createLikeInServer()
    }

    handleReject = () => {
        return console.log("rejected!")
    }

    createLikeInServer = () => {
      
        fetch(baseURL + '/likes/create', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pet_id: this.state.currentPet.id,
            adopter_id: this.state.adopter.id
          })
        })
      }

    getLikesFromAPI = (adopterID) => {
        fetch(baseURL + `/users/${adopterID}likes`)
        .then(res => res.json())
        .then(data => {
        const uniqueLikes = [...new Set(data)]
        this.setState({likes: uniqueLikes})
        })
    }

    randomiseShownPet = () => {
        let shownPet = [...this.state.currentPet]
        shownPet = this.state.pets[Math.round(Math.random(this.state.pets.length - 1 ))]
        this.setState({currentPet: shownPet})
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
            currentPet: allPets[Math.round(Math.random(this.state.pets.length - 1 )*10)]
          })
      })
    }
    //   .then(() => getCoordinates(this.state.adopter.location))
    //   .then(res => this.setState({
    //     userCoordinates: {res}
        
    

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