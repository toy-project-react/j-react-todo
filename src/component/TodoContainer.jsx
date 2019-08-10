import React, { useRef, useState } from "react";
import TodoList from "./TodoList";
import Add from "./Add";
import Todo from "./Todo";

const mockList = [
  {
    id: 1,
    title: "1",
    content: "내용1",
    category: "",
    createDate: new Date(),
    editDate: "",
    done: true
  },
  {
    id: 2,
    title: "2",
    content: "내용2",
    category: "",
    createDate: new Date(),
    editDate: "",
    done: false
  },
  {
    id: 3,
    title: "3",
    content: "내용3333333333",
    category: "",
    createDate: new Date(),
    editDate: "",
    done: false
  }
];
// const mockList = '';

const TodoContainer = () => {
  const [ todoList, setTodoList ] = useState( mockList );
  const [ value, setValue ] = useState( '' );
  const todoCount = useRef( todoList.length );

  const initTodo = (value) => {
    return {
      id: 0,
      title: "",
      content: value,
      category: "",
      createDate: new Date(),
      editDate: "",
      done: false
    };
  };

  const setTodo = (value) => {
    todoCount.current = todoCount.current + 1;

    return {
      id: todoCount.current,
      title: "",
      content: value,
      category: "",
      createDate: new Date(),
      editDate: ""
    }
  };

  const updateTodoList = (todoList, id, fnc) => {
    return todoList.map( (item) => {
      if ( item.id === id ){
        return fnc( item );
      }
      return item;
    } );
  };

  const onClickAdd = (value) => () => {

    let todo;

    if ( todoList.length ){
      todo = setTodo( value )
    } else {
      todo = initTodo( value );
    }

    setTodoList( [ ...todoList, todo ] );
    setValue( '' );
  };

  const onChange = ({ target: { value } }) => {
    setValue( value );
  };

  const onClickDelete = (id) => () => {
    const filterTodo = todoList.filter( (item) => {
      return item.id !== id;
    } );
    setTodoList( filterTodo );
  };

  const onClickDone = (id) => () => {
    const upDateTodoList = updateTodoList(
      todoList,
      id,
      (item) => ({ ...item, done: !item.done }) );
    setTodoList( upDateTodoList );
  };

  return (
    <Todo>
      <Add
        value={ value }
        onChange={ onChange }
        onClickAdd={ onClickAdd }
      />
      <TodoList
        todoList={ todoList }
        onClickDone={ onClickDone }
        onClickDelete={ onClickDelete }
      />
    </Todo>
  )
};

export default TodoContainer;
