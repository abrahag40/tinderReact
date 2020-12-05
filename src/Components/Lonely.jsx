import React from 'react'
import LikedPerson from './LikedPerson'

const Loney = ({ activeUserImage, linkedUsers, superLinkedUsers }) => (
    <div className="lonely">
        <p> There's no new around you </p>

        <span className="pulse">
            <img src={`/images/users/${activeUserImage}`} alt="You..."/>
        </span>

        <div className="liked-people">
            <p> {linkedUsers.length > 0 ? "People you liked... let's hope they like you too!" : ''} </p>

            {linkedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}

            <p> {superLinkedUsers.length > 0 ? "People you super liked!" : ""} </p>

            { superLinkedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            )) }
        </div>
    </div>
)

export default Loney