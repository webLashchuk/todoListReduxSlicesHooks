import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    newTaskText: ""
};

const generateUniqueId = (tasks) => {
    const allId = tasks.map(task => task.id);
    let newId = tasks.length + 1;

    while (allId.includes(newId)) {
        newId++;
    }

    return newId;
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            if (!action.payload.trim()) return;
            state.tasks.push({
                id: generateUniqueId(state.tasks),
                title: action.payload,
                isDone: false
            });
        },
        updateNewTask: (state, action) => {
            state.newTaskText = action.payload;
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
});

export const { addTask, updateNewTask, toggleTask, removeTask } = taskSlice.actions;

export default taskSlice;
