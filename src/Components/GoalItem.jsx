import React from 'react'

export function GoalItem(props) {

    const { goal } = props;
    return (
        <div className='goal-item'>
            <p className='date'>{new Date(goal.createdAt).toLocaleString('fr-FR')}</p>
            <h2>{goal.title}</h2>
        </div>
    )
}
