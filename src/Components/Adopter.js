import React, { Component } from 'react';
import PetCard from "./PetCard.js"
import '../App.css';
import ClippedDrawer from './ClippedDrawer.js'
import API from '../API'
import Grid from '@material-ui/core/Grid'
import { Transition } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import SimplePopper from './Popper'


import Fade from '@material-ui/core/Fade';



class Adopter extends Component {
    state = {
        likedPets: [],
        unlikedPets: [],
        currentPet: {},
        rejectedPets: [],
        adopterID: null,
        userCoordinates: {},
        likeOrReject: null,
        popper: null,
        expanded: false
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
        likeClone.find(eachPet => eachPet.id===pet.id) ? console.log("Error: already liked") : likeClone.push(pet)
        this.setState({
            likedPets: likeClone
        })
    }

    // addPetToUnlikedPets = (pet) => {
    //     let clone = this.state.unLikedPets
    //     clone.push(pet)
    //     this.setState({
    //         unLikedPets: clone
    //     })
    // }

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

    removePetFromLikedPets = (pet) => {
        let clone = [...this.state.likedPets]
        const filteredList = clone.filter(eachPet => eachPet.id !== pet.id)
        this.setState({
            likedPets: filteredList
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
        })
        this.addPetToLikedPets(targetPet)
        this.removePetFromUnlikedPets(targetPet)
        this.newPetCard()
        API.createLike(targetPet.id, this.state.adopterID)
    }

    handleReject = () => {
        console.log("rejected!")
        const targetPet = this.state.currentPet
        this.setState({likeOrReject: 'reject'})
        this.addPetToRejectedPets(targetPet)
        this.removePetFromUnlikedPets(targetPet)
        this.newPetCard()
    }


    // -------------------------Card functionality

    newPetCard = () => {
        const newPet = this.state.unlikedPets[Math.floor(Math.random()*this.state.unlikedPets.length)]
        this.setState({currentPet: newPet})
    }


    //-----------------Like filtering

    singlePetLikedByAdopter = (pet) => {
        return pet.likes.find(like => like.adopter_id === this.state.adopterID)
    }

    // ---------------Filtering

    
    

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

    handleSnipClick = (event, id) => {
        event.preventDefault()
        let newPet=this.state.likedPets.find(pet=>pet.id===id)
        this.setState({currentPet: newPet})
        this.setState({expanded: true})
    }
    
    handleSnipDelete = (event, id) => {
        event.preventDefault()
        const pet = this.state.likedPets.find(pet => pet.id === id)
        this.removePetFromLikedPets(pet)
        API.deleteLike(id, this.state.adopterID)
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };

      backToUnseen = () => {
        this.setState({expanded: false})
        this.newPetCard()
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
        const { currentPet, likeOrReject, likedPets, popper } = this.state
        // const id = popper ? 'simple-popper' : null;
        // const pop = (<SimplePopper id={id} popper={popper}/>)
        
       
        return (
            <div style={{backgroundColor: '#18BC9C'}}>
                <Grid container justify="center">
            
                <ClippedDrawer likedPets={likedPets} handleSnipClick={this.handleSnipClick} handleSnipDelete={this.handleSnipDelete} />
                    <Grid item justify="center">
                        <div className="ui middle aligned centered">
                        <PetCard 
                            pet={currentPet}
                            handleLike={this.handleLike}
                            handleReject={this.handleReject} 
                            handleExpandClick={this.handleExpandClick}
                            expanded={this.state.expanded}
                            likedPets={this.state.likedPets}
                            backToUnseen={this.backToUnseen}
                        /> 
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}  



export default Adopter

