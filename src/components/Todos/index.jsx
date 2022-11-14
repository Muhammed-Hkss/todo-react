import React, { useState } from 'react'
import { completedTodo, deleteTodo, editTodo, getAllTodos, getSingleTodo } from '../../config'
import cls from './Todos.module.scss'


import Card from '../Cards/Card'
import { useParams } from 'react-router-dom'
import TodoItem from '../TodoItem'


const Todos = () => {
  const USER_TOKEN = localStorage.getItem('userToken')
	const [todoBase, setTodoBase] = useState(null)
	const [monitoring, setMonitoring] = useState('')
  const [changedInput, setChangedInput] = useState('')
  const {id} = useParams()
// console.log(changedInput);

  function postUpdate(todoId){
    editTodo(todoId , changedInput).then(() => {setMonitoring(Date.now())})
  }


  
  
  
  
  React.useEffect(() => {
    getAllTodos().then((r) => {
      setTodoBase(r.data.todos)
      // console.log(r.data.todos)
		})
	}, [monitoring])
  
	if (todoBase === null) 
  return(<h1>loading</h1>)
  if (todoBase?.length === 0){
    return (
      <div className={cls.empty}>
        <h1 style={{
          color:'white' ,
          marginLeft:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}
        >
          No Todos
        </h1>
      </div>
    ) 
  }
  
  
  return (
    <div>
      <p style={{
        color:'white' ,
        marginLeft:'20px',
      }} 
      >
        Todo count:{todoBase?.length}
      </p>


      <div className={cls.todosContainer}>
        {todoBase && todoBase.map((item) => {
          // console.log(item);
          return(
           <TodoItem
              setChangedInput={setChangedInput}
              postUpdate={postUpdate}
              deleteTodo={deleteTodo}
              setMonitoring={setMonitoring}
              completedTodo={completedTodo}
              item={item}
           />
        )})}
      </div>
    </div>
  )
}

export default Todos
