import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../Features/Goals/goalSlice';


export function GoalItem(props) {

    const dispatch = useDispatch();

    const { goal } = props;
    return (
        <div className='goal'>
            <p className='date'>{new Date(goal.createdAt).toLocaleString('fr-FR')}</p>
            <h2>{goal.title}</h2>
            <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>X</button>
        </div>
    )
}
