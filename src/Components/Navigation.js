import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import PetCard from "./PetCard.js"
import './Navigation.css';


class Navigation extends Component {
  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <Swiper {...params}>
            <PetCard 
                pet={this.props.currentPet}
                handleLike={this.props.handleLike}
                handleReject={this.props.handleReject}
            />
      </Swiper>
    )
  }
}

export default Navigation