import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/todoReducer";

const CreateTodo = ({ eidtTodo, todo, settodo, setEditTodo }) => {
  const dispatch = useDispatch();

  const todoHanlde = () => {
    dispatch(addTodo(todo));
    settodo("");
  };

  const editTodoHandler = () => {
    dispatch(
      editTodo({
        index: eidtTodo.index,
        todo: todo,
      })
    );
    settodo("");
    setEditTodo({
      index: null,
      status: false,
    });
  };

  return (
    <div>
      <div className=" mt-9">
        <input
          value={todo}
          onChange={(e) => settodo(e.target.value)}
          type="text"
          placeholder="Enter your Todo"
          className=" p-4 m-5 rounded-sm outline-none w-[40%]"
        />

        {eidtTodo.status ? (
          <button
            className=" p-4 bg-gray-600 rounded-sm font-bold"
            onClick={editTodoHandler}
          >
            Save Todo
          </button>
        ) : (
          <button
            className=" p-4 bg-gray-600 rounded-sm font-bold"
            onClick={todoHanlde}
          >
            Add Todo
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateTodo;
