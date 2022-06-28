import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { updateGoal } from '../Features/Goals/goalSlice';

export function UpdateForm(props) {
    const [text, setText] = useState(props.goal.title);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateGoal({ ...props.goal, title: text }));
        setText('');
        props.closeFunc(false);
    }
    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Add A Goal</label>
                    <input type="text" name="title" id="title" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Update</button>
                </div>

            </form>
        </section>
    )
}
