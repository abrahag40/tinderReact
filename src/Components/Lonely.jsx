import React from 'react'
import LikedPerson from './LikedPerson'

const Loney = ({ activeUserImage, linkedUsers, superLinkedUsers }) => (
    <div className="lonely">
        <p> No hay nuevas personas cerca </p>

        <span className="pulse">
            <img src={`/images/users/${activeUserImage}`} alt="Tú..."/>
        </span>

        <div className="liked-people">
            <p> {linkedUsers.length > 0 ? "Persionas que te gustaron... " : ''} </p>

            {linkedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}

            <p> {superLinkedUsers.length > 0 ? "Personas que te dieron superlke!" : ""} </p>

            { superLinkedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            )) }
        </div>
    </div>
)

export default Loney