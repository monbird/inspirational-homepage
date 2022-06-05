import { createSlice } from '@reduxjs/toolkit';

// Slice Object
const goalsSlice = createSlice({
    name: 'goals',
    initialState: [
        {
            text: 'Water plants',
            status: false,
        },
        {
            text: 'Make lunch',
            status: false,
        },
        {
            text: 'Walk the dog',
            status: true,
        },
    ],
    reducers: {
        addGoal: (state, action) => {
            return [...state, { text: action.payload, status: false }];
        },
        removeGoal: (state, action) => {
            state.splice(action.payload, 1);
        },
        toggleGoalStatus: (state, action) => {
            state[action.payload].status = !state[action.payload].status;
        },
    },
});

// Selectors
export const selectGoals = (state) => {
    return state.goals;
};

// Actions
export const { addGoal, removeGoal, toggleGoalStatus } = goalsSlice.actions;

// Reducer
export default goalsSlice.reducer;
