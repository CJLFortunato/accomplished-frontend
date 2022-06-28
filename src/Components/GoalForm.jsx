import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createGoal } from '../Features/Goals/goalSlice';


export function GoalForm() {

  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ title: text }));
    setText('');
  }
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Add A Goal</label>
          <input type="text" name="title" id="title" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your goal here" />
        </div>
        <div className="form-group">
          <button type="submit" className='btn btn-block'>Add goal</button>
        </div>

      </form>
    </section>
  )
}
