import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import PetCard from "./PetCard.js"
import './Navigation.css'
import Grid from '@material-ui/core/Grid'



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
    //   this.props.handleLike()
    }
   
    goPrev() {
        if (this.swiper) this.swiper.slidePrev()
      console.log("reject")
    //   this.props.handleReject()
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
            <Grid container justify="center">
            <Swiper {...params} >
            {this.props.pets.map(pet => {
                return <div key={pet.id}>
                    <PetCard 
                    pet={pet}
                    handleLike={this.props.handleLike}
                    handleReject={this.props.handleReject}/>
                </div>
            })}
            </Swiper>
            <button onClick={this.goPrev}>Prev</button>
            <button onClick={this.goNext}>Next</button>
            </Grid>
        </div>
    )
  }
}

export default Navigation


// import React, { Component } from 'react';
// import Swiper from 'react-id-swiper';
// import PetCard from "./PetCard.js"
// import './Navigation.css';


// class Navigation extends Component {
//     constructor(props) {
//       super(props)
//       this.goNext = this.goNext.bind(this)
//       this.goPrev = this.goPrev.bind(this)
//       this.swiper = null
//     }
   
//     goNext() {
//       if (this.swiper) this.swiper.slideNext()
//         console.log("neeeext")
//     }
   
//     goPrev() {
//       if (this.swiper) this.swiper.slidePrev()
//     }

//     render() {
//         const params = {
//             pagination: {
//               el: '.swiper-pagination',
//               type: 'bullets',
//               clickable: true
//             }
//           }

//     return (
//         <div>
//             <Swiper {...params} >
//                 <div key={this.props.pet.id}>
//                     <PetCard 
//                     className="centered" 
//                     pet={this.props.pet}
//                     handleLike={this.props.handleLike}
//                     handleReject={this.props.handleReject}/>
//                 </div>
//             </Swiper>
//             <button onClick={this.goPrev}>Prev</button>
//             <button onClick={this.goNext}>Next</button>
//         </div>
//     )}
// }

// export default Navigation