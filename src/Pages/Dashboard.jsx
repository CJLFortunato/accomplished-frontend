import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GoalForm } from '../Components/GoalForm';
import { Spinner } from '../Components/Spinner';
import { getGoals, reset } from '../Features/Goals/goalSlice';
import { GoalItem } from '../Components/GoalItem';

export function Dashboard() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { goals, isLoading, isError, message } = useSelector((state) => state.goals);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        if (!user) {
            navigate('/login');
        }
        dispatch(getGoals());

        return () => {
            dispatch(reset());
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='dashboard'>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>Goals dashboard</p>
            </section>
            <GoalForm />
            <section className="content">
                {goals.length > 0 ? (
                    <div className="goals">
                        {goals.map(goal => (
                            <GoalItem key={goal._id} goal={goal} />
                        ))}
                    </div>
                ) : (<h3>You have not set any goals</h3>)}
            </section>

        </div>
    )
}
