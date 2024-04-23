import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../store/todoReducer.js";

const ShowTodo = ({ setEditTodo, settodo }) => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const removeTodos = (index) => {
    dispatch(removeTodo(index));
  };

  const editHandler = (index) => {
    const todotobeEdit = todos[index];
    settodo(todotobeEdit);
    setEditTodo({
      index: index,
      status: true,
    });
  };

  return (
    <div className="flex flex-col justify-  center items-center">
      {todos.map((todos, index) => (
        <div
          key={todos}
          className=" ml-6 flex w-[49%] items-center justify-between mb-4"
        >
          <li className="p-3 list-none font-bold text-xl">{todos}</li>
          <div className="">
            <button
              onClick={() => editHandler(index)}
              className=" px-9 mx-2 py-3 bg-blue-400 rounded-sm "
            >
              Edit
            </button>

            <button
              onClick={() => removeTodos(index)}
              className="mx-2 px-9 py-3 bg-red-400 rounded-sm "
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTodo;
