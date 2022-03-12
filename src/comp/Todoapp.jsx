import React from 'react'

const Todoapp = ({task,list1,list2}) => {

   
  return (
    <div>
       
        <h3>{task.action}</h3>
        
        <button onClick={ ()=> list1(task.id)}>delete</button>
        <button onClick={ ()=> list2(task.id)}>complete</button>
    </div>
  )
}

export default Todoapp