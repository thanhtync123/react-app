import React from 'react'
import StateTag from './StateTag'
type ToDoCard = {
    id: number
    name: string 
    state: string 
    description? : string
}
type ToDoCardProps = 
{
  todo:ToDoCard
}
const TodoCard = ({todo}:ToDoCardProps) => {
  return (
    <div className='border border-gray-800 p-4'>
        <h3 className='font-bold text-2xl'>{todo.name}</h3>
        <StateTag state={todo.state}/>
        <p>{todo.description}</p>
    </div>
  )
}

export default TodoCard