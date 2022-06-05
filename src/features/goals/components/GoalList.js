import React from 'react';
import { useSelector } from 'react-redux';
import { Goal } from './Goal';
import { selectGoals } from '../goalsSlice';

export const GoalList = () => {
    const goalList = useSelector(selectGoals);

    return (
        <div>
            <h3>Goal List</h3>
            <ul>
                {goalList.map((goal, idx) => (
                    <Goal goal={goal} index={idx} key={idx} />
                ))}
            </ul>
        </div>
    );
};
