import React from 'react'
import Todoapp from './Todoapp'

const Todolist = (props) => {
    console.log(props)
  return (
    <div>
        {
            props.list.map(el =>
             <Todoapp task={el} list1={props.list1} list2={props.list2}   />
            )
        }
    </div>
  )
}

export default Todolist