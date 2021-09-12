import React from 'react'
import AvatarPlayer from './AvatarPlayer';

function User({ player, image }) {

    return (
        <div>
            <AvatarPlayer image={image} />
            <p >Player: <strong>{player}</strong></p>
        </div>
    )
}

export default User
