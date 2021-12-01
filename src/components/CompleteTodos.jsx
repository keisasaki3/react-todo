import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div>
      <p>完了のTODO</p>
      <ul>
        {completeTodos.map((completeTodo, index) => {
          return (
            <li key={completeTodo}>
              {completeTodo}
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
