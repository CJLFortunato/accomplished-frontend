import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../Features/Goals/goalSlice';


export function GoalItem(props) {

    const dispatch = useDispatch();

    const { goal } = props;
    return (
        <div className='goal'>
            <div className="ctn-start">
                <i className="fa-solid fa-star"></i>
                <h2>{goal.title}</h2>
            </div>
            <div className="ctn-end">
                <p className='date'>{new Date(goal.createdAt).toLocaleDateString('fr-FR')}</p>
                <button className="edit" onClick={() => dispatch(deleteGoal(goal._id))}><i className="fa-solid fa-pen"></i></button>
                <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}><i className="fa-solid fa-xmark"></i></button>
            </div>


        </div>
    )
}
