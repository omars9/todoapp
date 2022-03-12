import React, { useState } from 'react'

const Addtask = ({add}) => {
 
 const [text, setText] = useState('')

 const handleSubmit = (e) => {
     e.preventDefault()
     add(text)
     setText('')
 }
 


 
    return (
    <div>
         <form onSubmit={handleSubmit}  >
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <button>Add</button>
         </form>
</div>
  )
}

export default Addtask