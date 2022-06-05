import React from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../goalsSlice';

export const GoalInputForm = () => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addGoal(inputValue));
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="goalInput">What's on your mind today?</label>
            <input
                type="text"
                id="goalInput"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
        </form>
    );
};
