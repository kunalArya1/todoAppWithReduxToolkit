import React, { useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import ShowTodo from "./Components/ShowTodo";

const App = () => {
  const [todo, settodo] = useState("");
  const [eidtTodo, seteidtTodo] = useState({
    index: null,
    status: false,
  });

  return (
    <div className=" text-center ">
      <h1 className=" mt-9 font-bold text-2xl">Todo App</h1>
      <CreateTodo
        todo={todo}
        settodo={settodo}
        eidtTodo={eidtTodo}
        setEditTodo={seteidtTodo}
      />
      <ShowTodo
        settodo={settodo}
        eidtTodo={eidtTodo}
        todo={todo}
        setEditTodo={seteidtTodo}
      />
    </div>
  );
};

export default App;
