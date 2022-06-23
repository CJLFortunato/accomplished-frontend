import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
        <label htmlFor="title">Goal</label>
        <input type="text" name="title" id="title" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your goal here" />
        <button type="submit">Add goal</button>
      </form>
    </section>
  )
}
