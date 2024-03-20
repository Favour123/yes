
import React from "react"; 
const Todolist = ({ todo, setTodo, setEditTodo }) => {

  const handleComplete = (todoItem) => {
   setTodo(
    todo.map((item) =>{
      if(item.id === todoItem.id){
        return {...item, completed: !item.completed};
      }
      return item;
    })
   )
  };
  const handleEdit = (id) => {
    const findTodo = todo.find((todoItem) => todoItem.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <div>
      {todo.map((todoItem) => {
        return (
          <li className="list-item" key={todoItem.id}>
            <input
              type="text"
              value={todoItem.title}
              className={`list ${todo.completed} ? "complete" : "" `}
              onChange={(event) => {
                event.preventDefault();
              }}
            />
            <div className="buts">
              <button
                className="button-complete task-button"
                onClick={() => 
                  handleComplete(todoItem.id)
                }
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => {
                  handleEdit(todoItem.id);
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => {
                  handleDelete(todoItem.id);
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Todolist;
