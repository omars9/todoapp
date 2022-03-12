import { useState } from 'react';
import './App.css';
import Addtask from './comp/Addtask';
import Todoapp from './comp/Todoapp';
import Todolist from './comp/Todolist';




function App() {

  const [todos, setTodos] = useState([
    {id: Math.random(), action:"text",isDone:true},
    {id: Math.random(), action:"text1",isDone:false},
    
  
  ])

  // const del = (i) => {
  //   this.setState({ todos: this.state.todos.filter((el) => el.id !== i) });
  // };

  const del = (i) => setTodos(todos.filter(el=>el.id !== i))
  const comp = (c)=> setTodos(todos.map((el) =>
  el.id === c ? { ...el, isDone: !el.isDone } : el
),)

const handleAdd = (text) => {
  const newTask = {
    id:Math.random(),
    action:text,
    isDone:false
  }
  setTodos([...todos,newTask])
}
  return (
    <div className="App">
       <Addtask  add={handleAdd} />
       <Todolist list={todos} list1={del}
       list2={comp}  />
      
    </div>
  );
}

export default App;
