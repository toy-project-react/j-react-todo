import React from "react";

const TodoList = ({ todoList, onClickDone, onClickDelete }) => {
  const isNotArray = Array.isArray( todoList );

  return (
    <>
      <ul id="myUL">
        { isNotArray && todoList.map( (todo) => {
          return (
            <li
              onClick={ onClickDone( todo.id ) }
              key={ todo.id }
              className={ todo.done ? "done" : "" }
            >
              { todo.content }
              <span className="close" onClick={ onClickDelete( todo.id ) }>×</span>
            </li>
          )
        } ) }
      </ul>
      { isNotArray && !todoList.length && '할일없음' }
    </>
  )
}

export default TodoList;
