import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, Todo } from '../actions/index';
import { StoreState } from '../reducers/index';
// Note: fl 3ady el mfrod n7ot mwdo3 el state bta3t el fetching fe redux zy ma 3mlna fl e-commerce project, bs hena 3shan nfhm 2ktr hn7otha fe state el component 3ady.

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

function Todos(props: AppProps) {
  const [fetching, setFetching] = useState(false);

  function handleClick(): void {
    props.fetchTodos();
    setFetching(true);
  }
  function handleDelete(id: number) {
    props.deleteTodo(id);
  }
  useEffect(() => {
    setFetching(false);
  }, [fetching]);

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
