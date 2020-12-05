import React from 'react'
import Rewind from './Actions/Rewind'
import Dislike from './Actions/Dislike'
import Like from './Actions/Like'
import Superlike from './Actions/SuperLike'

const Actions = ({ person, modifySuperficialChoices }) => (
    <div id="actions">
        <Rewind userId={person.Id} />
        <Dislike 
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />
        <Like 
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />
        <Superlike 
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />
    </div>
)

export default Actions