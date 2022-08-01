const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

const initialState = {
    tasks: [
        {id: 1, name: 'create a task', completed: false, priority: 'low'},
        {id: 2, name: 'wash a dish', completed: false, priority: 'high'},
        {id: 3, name: 'draw a pic', completed: true, priority: 'low'},
        {id: 4, name: 'make a bed', completed: true, priority: 'high'},
        {id: 5, name: 'write a post', completed: false, priority: 'low'}
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
                    completed: false,
                    priority: 'low'
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

        default: return state;
    }
}

export const addTaskAC = (name) => {
    return (dispatch) => {
        return dispatch({type: ADD_TASK, name})
    }
}

export const deleteTask = (taskId) => {
    return (dispatch) => {
        return dispatch({type:DELETE_TASK, taskId})
    }
}