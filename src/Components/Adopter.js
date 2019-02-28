import React, { Component } from 'react';
import PetCard from "./PetCard.js"
import '../App.css';
import ClippedDrawer from './ClippedDrawer.js'
import API from '../API'


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

    randomiseShownPet = (allPets) => {
        return allPets[Math.round(Math.random(this.state.pets.length - 1 )*10)]
    }

    componentDidMount () {
        const {history} = this.props
        if (!localStorage.token) {
            history.push('/login')
        }
        else {
                // API.validate here? Not working
                fetch ('http://localhost:3000/api/v1/pets', {
                headers: { 
                  'content-type': 'application/json', 
                  'Authorization': localStorage.getItem('token')
                }}).then(res => res.json()
                ).then(allPets => {
                    this.setState({
                    pets: allPets,
                    currentPet: this.randomiseShownPet(allPets)
                })
            })}
        }
    //   .then(() => getCoordinates(this.state.adopter.location))
    //   .then(res => this.setState({
    //     userCoordinates: {res}
        
    render () {
        return (
        <div>
            {/* <ClippedDrawer /> */}
            <PetCard className="centered" 
            pet={this.state.currentPet}
            handleLike={this.handleLike}
            handleReject={this.handleReject}
            />
        </div>
        )
    }
}  

export default Adopter