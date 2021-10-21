import { Todo, Action, ActionTypes } from '../actions/index';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    //note: switch also acts as type gaurd just as if condition.
    case ActionTypes.fetchTodos:
      return action.payLoad;
    case ActionTypes.deleteTodo:
      return state.filter((todo) => {
        return todo.id !== action.payLoad;
      });
    default:
      return state;
  }
};
