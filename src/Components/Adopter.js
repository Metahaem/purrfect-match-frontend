import React, { Component } from 'react';
import PetCard from "./PetCard.js"
import '../App.css';
import ClippedDrawer from './ClippedDrawer.js'
import API from '../API'
import Grid from '@material-ui/core/Grid'
import { Transition } from 'semantic-ui-react'

class Adopter extends Component {
    state = {
        likedPets: [],
        unlikedPets: [],
        currentPet: {},
        rejectedPets: [],
        adopterID: null,
        userCoordinates: {},
        likeOrReject: null,
        visible: true
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

    // -------------------------Like functionality

    addPetToLikedPets = (pet) => {
        let likeClone = [...this.state.likedPets]
        likeClone.push(pet)
        this.setState({
            likedPets: likeClone
        })
    }

    addPetToRejectedPets = (pet) => {
        let rejectedClone = [...this.state.rejectedPets]
        rejectedClone.push(pet)
        this.setState({
            rejectedPets: rejectedClone
        })
    }

    removePetFromUnlikedPets = (pet) => {
        let unlikeClone = [...this.state.unlikedPets]
        const filteredList = unlikeClone.filter(eachPet => eachPet.id !== pet.id)
        this.setState({
            unlikedPets: filteredList
        })
    }

    newPetCard = () => {
        const newPet = this.randomiseShownPet(this.state.pets)
        this.setState({currentPet: newPet})
    }


    handleLike = () => {
        console.log("liked!")
        const targetPet = this.state.currentPet
        this.setState({
            likeOrReject: 'like',
            visible: false
        })
        this.addPetToLikedPets(targetPet)
        this.removePetFromUnlikedPets(targetPet)
        this.newPetCard()
        API.createLike(targetPet.id, this.state.adopterID)
    }

    handleReject = () => {
        console.log("rejected!")
        const targetPet = this.state.currentPet
        this.setState({likeOrReject: 'reject', visible: false})
        this.addPetToRejectedPets(targetPet)
        this.removePetFromUnlikedPets(targetPet)
        this.newPetCard()
    }


    // -------------------------Card functionality

    newPetCard = () => {
        const newPet = this.state.unlikedPets[Math.floor(Math.random()*this.state.unlikedPets.length)]
        this.setState({currentPet: newPet, visible: true})
    }


    //-----------------Like filtering

    singlePetLikedByAdopter = (pet) => {
        return pet.likes.find(like => like.adopter_id === this.state.adopterID)
    }
    

    // ------------------------ Page load functionality
    setPetsToState = (petData) => {
        this.setState({
            unlikedPets: petData.filter(pet => !this.singlePetLikedByAdopter(pet)),
            likedPets: petData.filter(pet => this.singlePetLikedByAdopter(pet))
        })
    }

    setAdopterIDToState = (id) => {
        return this.setState({
            adopterID: id
        })
    }

    componentDidMount () {
        const {history} = this.props
        if (!localStorage.token || localStorage.token === "undefined") {
            return history.push('/login')
        }
        else {
                // API.validate here? Not working
                return API.getAdopterID()
                .then(id => this.setAdopterIDToState(id))
                .then(() => API.getPets())
                .then(allPets => this.setPetsToState(allPets))
                .then(() => this.newPetCard())
        }
    }

        
    render () {
        const { currentPet, visible, likeOrReject, likedPets } = this.state
        return (
        <div>
            <Grid container justify="center">
                <ClippedDrawer likedPets={likedPets}/>
                <Transition.Group animation={likeOrReject == 'like' ? 'slide right' : 'slide left'} duration={500}>
                    <PetCard 
                        className="ui middle aligned centered" 
                        style='padding-top: 89px'
                        pet={currentPet}
                        handleLike={this.handleLike}
                        handleReject={this.handleReject}
                     />
                </Transition.Group>
            </Grid>
        </div>
        )
    }
}  

export default Adopter

