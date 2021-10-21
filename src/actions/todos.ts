import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//this optinal to use, it use just an extra check for us when we dispatch actions.
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payLoad: Todo[];
}
export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payLoad: number;
}

export function fetchTodos() {
  return async (dispatch: Dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data: Todo[] = await response.json();

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payLoad: data,
    });
  };
}

export function deleteTodo(id: number): DeleteTodoAction {
  return { type: ActionTypes.deleteTodo, payLoad: id };
}
