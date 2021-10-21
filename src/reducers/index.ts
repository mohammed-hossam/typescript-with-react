import { combineReducers } from 'redux';
import { todosReducer } from './todo';
import { Todo } from '../actions/index';

//this interface to check that the reducers return the right data we want, from inside this file we are in(indexReducers).
//it acts as a documentation for the state of our app.
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({ todos: todosReducer });
