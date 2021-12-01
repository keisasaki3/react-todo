import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <p>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((incompleteTodo, index) => {
          return (
            <li key={incompleteTodo}>
              {incompleteTodo}
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
