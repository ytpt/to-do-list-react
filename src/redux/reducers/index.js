import React from "react";
import { combineReducers } from "redux";
import tasks from './tasks';

const rootReducer = () => combineReducers({tasks});

export default rootReducer;