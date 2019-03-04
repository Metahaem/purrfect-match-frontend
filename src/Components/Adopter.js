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
        }

    likedPets = this.state.pets.filter(pet => this.singlePetLikedByAdopter(pet))

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

    // -------------------------Like functionality

    addLikeToState = (pet) => {
        let likeClone = [...this.state.likedPets]
        likeClone.push(pet)
        this.setState({
            likedPets: likeClone
        })
    }

    newPetCard = () => {
        const newPet = this.randomiseShownPet(this.state.pets)
        this.setState({currentPet: newPet})
    }


    handleLike = () => {
        console.log("liked!")
        this.addLikeToState(this.state.currentPet)
        this.newPetCard()
        API.createLike(this.state)
    }

    handleReject = () => {
        return console.log("rejected!")
    }


    // -------------------------Card functionality

    randomiseShownPet = (allPets) => {
        const unlikedPets = allPets.filter(pet => !this.singlePetLikedByAdopter(pet) )
        return unlikedPets[Math.round(Math.random(this.state.pets.length - 1 )*10)]
    }

    //-----------------Like filtering

    singlePetLikedByAdopter = (pet) => {
        return pet.likes.find(like => like.adopter_id === this.state.adopterID).length > 0
    }
    

    
    
    // ------------------------ Page load functionality
    setPetsToState = (petData) => {
        return this.setState({
            pets: petData,
            currentPet: this.randomiseShownPet(petData)
        })
    }

    setAdopterIDToState = (id) => {
        this.setState({
            adopterID: id
        })
    }


    // setLikestoState = () => {
    //     const liked = this.state.pets.filter(pet => this.singlePetLikedByAdopter(pet))
    //     return this.setState({likedPets: liked})
    // }

    // filterOutLikedPets = (pets) => {
    //     return pets.filter(pet => !this.singlePetLikedByAdopter(pet) )
    // }

    componentDidMount () {
        const {history} = this.props
        if (!localStorage.token || localStorage.token === "undefined") {
            return history.push('/login')
        }
        else {
                // API.validate here? Not working
                return API.getAdopterID()
                .then((id) => this.setAdopterIDToState(id))
                .then(() => API.getPets())
                .then(allPets => this.setPetsToState(allPets))
        }
    }

        
    render () {
        return (
        <div>
            <Grid container justify="center">
            <ClippedDrawer likes={this.likedPets}/>
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