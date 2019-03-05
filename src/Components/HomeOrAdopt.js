import React, { Component } from 'react'
import ImageReveal from './Reveal'
import house from '../house.jpg'
import cat from '../cat.png'
import { Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const HomeOrAdopt = () => {
    return (
        <Grid divided='vertically'>
            <Grid.Row columns={3}>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
                <h2>What would you like to do?</h2>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>

            </Grid.Row>

            <Grid.Row columns={2}>
                <Grid.Column>
                    <Link to={`/home`}>
                        <ImageReveal image={house} info={'Find someone to rehome your pet'} direction='rotate left'/>
                    </Link>
                </Grid.Column>
                    <Link to={`/adopter`}>
                <Grid.Column>
                        < ImageReveal image={cat} info={'Adopt a pet!'} direction='rotate'/>
                </Grid.Column>
                    </Link>
            </Grid.Row>
        </Grid>
    )
}

export default HomeOrAdopt
