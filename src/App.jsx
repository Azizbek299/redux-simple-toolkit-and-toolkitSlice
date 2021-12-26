import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, addTodo, removeLastTodo} from './toolkitRedux/toolkitSlice';

//  import {increment, decrement} from './toolkitRedux/toolkitReducer';   for simple toolkit


function App() {
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      <br />
      <ul>
        {todos.map((todo) => {
          return <li key={todo}> {todo}</li>;
        })}
      </ul>
      <button onClick={() => dispatch(addTodo(prompt()))}>Add Todo</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={() => dispatch(removeLastTodo())}>Remove Todo</button>
    </div>
  );
}

export default App;
