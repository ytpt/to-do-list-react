const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const DONE_TASK = 'DO_DONE';

const initialState = {
    tasks: [
        {id: 1, name: 'create a task', isDone: false, important: 'low'},
        {id: 2, name: 'wash a dish', isDone: false, important: 'high'},
        {id: 3, name: 'draw a pic', isDone: true, important: 'low'},
        {id: 4, name: 'make a bed', isDone: true, important: 'high'},
        {id: 5, name: 'write a post', isDone: false, important: 'low'}
    ],
    count: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: Math.floor(Math.random() * 1000),
                    name: action.name,
                    isDone: false,
                    important: action.important
                }],
                count: state.count + 1
            }
        }

        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.taskId),
                count: state.count - 1
            }
        }

        case DONE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.id) {
                        return {...task, isDone: !task.isDone}
                    }

                return task

                })
            }
        }

        default: return state;
    }
}

export const addTaskAC = (name, important) => {
    return (dispatch) => dispatch({type: ADD_TASK, name, important})
}

export const deleteTaskAC = (taskId) => {
    return (dispatch) => dispatch({type: DELETE_TASK, taskId})
}

export const doneTaskAC = (taskId, isDone) => {
    return (dispatch) => dispatch({type: DONE_TASK, taskId, isDone})
}