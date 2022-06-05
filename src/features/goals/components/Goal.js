import React from 'react';
import { useDispatch } from 'react-redux';
import { removeGoal, toggleGoalStatus } from '../goalsSlice';

export const Goal = ({ goal, index }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeGoal(index));
    };

    const handleDone = () => {
        dispatch(toggleGoalStatus(index));
    };

    return (
        <div style={{ backgroundColor: 'grey' }}>
            <p>{goal.text}</p>
            <p>{goal.status ? 'true' : 'false'}</p>
            <p>{index}</p>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleDone}>Done</button>
        </div>
    );
};
