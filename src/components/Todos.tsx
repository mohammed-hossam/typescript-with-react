import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, Todo } from '../actions/index';
import { StoreState } from '../reducers/index';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

function Todos(props: AppProps) {
  function handleClick(): void {
    props.fetchTodos();
  }

  function handleDelete(id: number) {
    props.deleteTodo(id);
  }

  function renderList() {
    return props.todos.map((todo: Todo, i) => {
      return (
        <div
          key={todo.id}
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          {todo.title}
        </div>
      );
    });
  }

  console.log(props.todos);
  return (
    <div>
      <button onClick={handleClick}>fetch todos</button>
      {renderList()}
    </div>
  );
}

function mapStateToProps(state: StoreState): { todos: Todo[] } {
  return { todos: state.todos };
}
export default connect(mapStateToProps, { fetchTodos, deleteTodo })(Todos);
