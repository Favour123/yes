import   React ,{useEffect} from "react";
import {v4 as uuId} from "uuid";

const Form = ({input, setInput, todo, setTodo, setEditTodo, editTodo})=>{
      const updateTodo = (title, id, completed) => {
            const newTodo = todo.map((todoItem) => 
              todoItem.id === id ? { ...todoItem, title, completed } : todoItem
          )
            setTodo(newTodo);
            setEditTodo("");
          };
          
          useEffect(()=>{
            if (editTodo){
                  setInput(editTodo.title);
            }
            else{
                  setInput("");
            }
          },[setInput, editTodo]);
          
          
      const onInputChange=(event) =>{
            setInput(event.target.value);
      };
      const onFormSubmit= (event) =>{
            event.preventDefault();
            if(!editTodo){
                  setTodo([...todo, {id: uuId(), title:input, completed: false }]);
                  setInput("");              
            }
            else{
                  updateTodo(input, editTodo.id,editTodo.completed)
            }
            
      };
      return(
            <form onSubmit={onFormSubmit}>
                  <input type="text" placeholder="Enter a Task..." className="tasks-input" value={input} required onChange={onInputChange}/>
                  <button className="button-add" type="submit">
                        {editTodo ? "OK" : "ADD"}
                  </button>
            </form>
      )

}

export default Form;
