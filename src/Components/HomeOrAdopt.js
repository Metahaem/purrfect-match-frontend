import React, { Component } from 'react'
import ImageReveal from './Reveal'
import house from '../house.jpg'
import cat from '../cat.png'
import { Grid } from 'semantic-ui-react'


const HomeOrAdopt = () => {
    return (
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <ImageReveal image={house} direction='rotate left'/>
                </Grid.Column>
                <Grid.Column>
                    <ImageReveal image={cat} direction='rotate'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default HomeOrAdopt
