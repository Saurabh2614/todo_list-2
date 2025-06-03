import "./styles.css";
import todoinput from "./pages/todoinput";
import TodoIonput from "./pages/TodoIonput";
import { useState } from "react";
import TodoList from "./pages/TodoList";

export default function App() {
  const [listtodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listtodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listtodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  const editListItem = (key) => {};
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoIonput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        <br />
        {listtodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              editItem={editListItem}
            />
          );
        })}
      </div>
    </div>
  );
}
