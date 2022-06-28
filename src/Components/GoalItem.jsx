import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../Features/Goals/goalSlice';

import { UpdateForm } from './UpdateForm';


export function GoalItem(props) {

    const [isUpdating, setIsUpdating] = useState(false);

    const dispatch = useDispatch();

    const { goal } = props;
    return (
        <>
            <div className='goal'>
                <div className="ctn-start">
                    <i className="fa-solid fa-star"></i>
                    <h2>{goal.title}</h2>
                </div>
                <div className="ctn-end">
                    <p className='date'>{new Date(goal.createdAt).toLocaleDateString('fr-FR')}</p>
                    <button className="edit" onClick={() => setIsUpdating(true)}><i className="fa-solid fa-pen"></i></button>
                    <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            {isUpdating && <UpdateForm goal={goal} closeFunc={setIsUpdating} />}
        </>
    )
}
