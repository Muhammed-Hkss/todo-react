import React, { useState } from 'react'
import { completedTodo, deleteTodo, editTodo, getAllTodos} from '../../config'
import cls from './Todos.module.scss'
import TodoItem from '../TodoItem'
import Loading from '../Loading'


const Todos = () => {
	const [todoBase, setTodoBase] = useState(null)
	const [monitoring, setMonitoring] = useState('')
  const [changedInput, setChangedInput] = useState('')
  // const [loading , setLoading] = React.useState(false)

  function postUpdate(todoId){
    editTodo(todoId , changedInput).then(() => {setMonitoring(Date.now())})
  }


  
  // console.log(monitoring);
  
  
  React.useEffect(() => {
    getAllTodos().then((r) => {
      setTodoBase(r.data.todos)
		})
	}, [monitoring])
  

  // console.log(monitoring);


	if (todoBase === null) 
  return(<div><Loading /></div>)
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
          // console.log(item.completed);          
          return(
            <TodoItem
              key={item.id}
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
