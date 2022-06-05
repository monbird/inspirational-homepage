import React from 'react';
import { GoalInputForm } from './components/GoalInputForm';
import { GoalList } from './components/GoalList';

export const Goals = () => {
    return (
        <div>
            <GoalInputForm />
            <GoalList />
        </div>
    );
};
