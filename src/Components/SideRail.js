import React from 'react'
import List from '@material-ui/core/List';
import Petsnip from './Petsnip'


const SideRail = ({likedPets}) => (
  <div style={{padding: "120px"}}>
  Your Selections
  <List>
    {likedPets.map(pet => (
      <Petsnip pet={pet} />
    ))}
  </List>
  </div>
)

export default SideRail