import { FetchTodosAction, DeleteTodoAction } from './index';

export enum ActionTypes {
  fetchTodos = 'FETCH_TODOS',
  deleteTodo = 'DELETE_TODO',
}
export type Action = FetchTodosAction | DeleteTodoAction;
