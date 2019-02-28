import React from 'react';
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h2>Welcome!</h2>
            <img src='../cat.png' />
            <Link to='/login'>Log in</Link>
        </div>
    )
}

export default Welcome