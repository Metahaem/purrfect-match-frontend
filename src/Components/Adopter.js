import React, { Component } from 'react';
import PetCard from "./PetCard.js"
import '../App.css';
import ClippedDrawer from './ClippedDrawer.js'
import API from '../API'
import Grid from '@material-ui/core/Grid'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { Transition } from 'semantic-ui-react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'


class Adopter extends Component {
    state = {
        likedPets: [],
        unseenPets: [],
        currentPet: {},
        rejectedPets: [],
        adopterID: null,
        userCoordinates: {},
        likeOrReject: null,
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

    removePetFromUnseenPets = (pet) => {
        let unlikeClone = [...this.state.unseenPets]
        const filteredList = unlikeClone.filter(eachPet => eachPet.id !== pet.id)
        this.setState({
            unseenPets: filteredList
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
        this.removePetFromUnseenPets(targetPet)
        this.newPetCard()
        API.createLike(targetPet.id, this.state.adopterID)
    }

    handleReject = () => {
        console.log("rejected!")
        const targetPet = this.state.currentPet
        this.setState({likeOrReject: 'reject'})
        this.addPetToRejectedPets(targetPet)
        this.removePetFromUnseenPets(targetPet)
        this.newPetCard()
    }


    // -------------------------Card functionality

    newPetCard = () => {
        const petIDs = this.state.unseenPets.map(pet => pet.id)
        const randomID = petIDs[Math.floor(Math.random()*petIDs.length)]
        debugger
        this.props.history.push(`/adopter/${randomID}`)
        // const newPet = this.state.unseenPets[Math.floor(Math.random()*this.state.unseenPets.length)]
        // this.setState({currentPet: newPet})
    }


    //-----------------Like filtering

    singlePetLikedByAdopter = (pet) => {
        return pet.likes.find(like => like.adopter_id === this.state.adopterID)
    }


    

    // ------------------------ Page load functionality
    setPetsToState = (petData) => {
        this.setState({
            unseenPets: petData.filter(pet => !this.singlePetLikedByAdopter(pet)),
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
                // .then(() => this.newPetCard())
        }
    }


        
    render () {
        const { currentPet, likeOrReject, likedPets, unseenPets } = this.state
        // const pet = this.state.unseenPets.find(pet => pet.id === 22)
        return (
            <Router>
                
        <div>
            <Grid container>
            <ClippedDrawer likedPets={likedPets}/>
                <Grid item >
                    <Switch>
                            <Route exact path={`/adopter/:id`} component={({match}) => {
                                return <PetCard 
                                    className="ui middle aligned centered" 
                                    pet={unseenPets[0]}
                                    unseenPets={this.state.unseenPets}
                                    handleLike={this.handleLike}
                                    handleReject={this.handleReject}
                                />
                            }}/>
                      
                        <Route component={() => <h1>Animal not found.</h1>} />
                    </Switch>

                </Grid>
            </Grid>
        </div>
            </Router>
        )
    }
}  

export default Adopter

