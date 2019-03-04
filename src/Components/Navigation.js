import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import PetCard from "./PetCard.js"
import './Navigation.css';


class Navigation extends Component {
    constructor(props) {
      super(props)
      this.goNext = this.goNext.bind(this)
      this.goPrev = this.goPrev.bind(this)
      this.swiper = null
    }
   
    goNext() {
      if (this.swiper) this.swiper.slideNext()
        console.log("neeeext")
    }
   
    goPrev() {
      if (this.swiper) this.swiper.slidePrev()
    }

    render() {
        const params = {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            }
          }

        //   console.log(this.props.pets)

    return (
        <div>
            <Swiper {...params} >
            {this.props.pets.map(pet => {
                return <div key={pet.id}>
                    <PetCard 
                    className="centered" 
                    pet={pet}
                    handleLike={this.props.handleLike}
                    handleReject={this.props.handleReject}/>
                </div>
            })}
            </Swiper>
            <button onClick={this.goPrev}>Prev</button>
            <button onClick={this.goNext}>Next</button>
        </div>
    )
  }
}

export default Navigation