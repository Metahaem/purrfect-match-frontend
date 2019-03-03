import React, { Component } from 'react';
import PetCard from "./PetCard.js"
import '../App.css';
import ClippedDrawer from './ClippedDrawer.js'
import API from '../API'
import Grid from '@material-ui/core/Grid'


const baseURL = 'http://localhost:3000/api/v1'
const petsUrl = 'http://localhost:3000/api/v1/pets'


class Adopter extends Component {
    state = {
        pets: [],
        currentPet: {},
        adopterID: null,
        userCoordinates: {},
        likes: []
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

    addLikeToState = (newLike) => {
        let likeClone = [...this.state.likes]
        likeClone.push(newLike)
        this.setState({
            likes: likeClone
        })
    }

    newPetCard = () => {
        const newPet = this.randomiseShownPet(this.state.pets)
        this.setState({currentPet: newPet})
    }

    createLike = () => {
        return fetch(baseURL + '/likes/create', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          },
          body: JSON.stringify({
            pet_id: this.state.currentPet.id,
            adopter_id: this.state.adopterID
          })
        }).then(res => res.json())
      }

    handleLike = () => {
        console.log("liked!")
        return this.createLike()
        .then((newLike) => this.addLikeToState(newLike))
        .then(() => this.newPetCard())
    }

    handleReject = () => {
        return console.log("rejected!")
    }

    randomiseShownPet = (allPets) => {
        return allPets[Math.round(Math.random(this.state.pets.length - 1 )*10)]
    }

    setPetsToState = (petData) => {
        const filteredPets = this.filterOutLikedPets(petData)
        return this.setState({
            pets: filteredPets,
            currentPet: this.randomiseShownPet(filteredPets)
        })
    }

    setAdopterIDToState = (id) => {
        this.setState({
            adopterID: id
        })
    }

    setLikestoState = () => {
        API.getLikes().then((likes) => this.setState({likes}))
    }

    getLikedPetIDs = () => {
        return this.state.likes.map(like => like.pet_id)
    }

    filterOutLikedPets = (pets) => {
        const likedIDs = this.getLikedPetIDs()
        return pets.filter(pet => !likedIDs.includes(pet.id) )
    }

    componentDidMount () {
        const {history} = this.props
        if (!localStorage.token) {
            return history.push('/login')
        }
        else {
                // API.validate here? Not working
                return API.getAdopterID()
                .then((id) => this.setAdopterIDToState(id))
                    .then(() => this.setLikestoState())
                        .then(() => {
                            return API.getPets()
                            .then(allPets => {
                                this.setPetsToState(allPets)
                            })
                        })

        }
    }

        
    render () {
        return (
        <div>
            <Grid container justify="center">
            <ClippedDrawer likes={this.state.likes}/>
            <PetCard className="centered" 
            pet={this.state.currentPet}
            handleLike={this.handleLike}
            handleReject={this.handleReject}
            />
            </Grid>
        </div>
        )
    }
}  

export default Adopter