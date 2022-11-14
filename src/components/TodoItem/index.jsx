import React, { useState } from 'react'
import cls from './TodoItem.module.scss'
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { BiCheck , BiX } from 'react-icons/bi'


const TodoItem = ({
    setChangedInput,
    postUpdate,
    deleteTodo,
    setMonitoring,
    item,
    completedTodo,
}) => {
    const [isDropdown, setIsDropdown] = useState(false)


  return (
    <div className={cls.todo_data} key={item.id}>

    <div className={cls.title_data}>
      <p>{item.date}</p>
      <h3>{item.title}</h3>
      {
        item.completed === true ? 
        <BiCheck 
          style={{
            background:'springgreen' , 
            color:'white' , 
            borderRadius:'50%' , 
            width:'50px' , 
            height:'50px' , 
            marginTop:'10px'
            
          }} 
        /> : <p></p>
      }
    </div>
    {/* <h3>{item.title}</h3> */}




    <div className={`${cls.todo_input_data} ${isDropdown ? cls.active : ''}`}>
      <span>Change title to:</span>
      <input 
        className={cls.todo_input}
        onChange={(e) => setChangedInput({ ...item, title: e.target.value })}
        defaultValue={item.title}
      />

      <input 
        className={cls.todo_input}
        onChange={(e) => setChangedInput({ ...item, content: e.target.value })}
        defaultValue={item.content}
      />
      <button className={cls.change_btn} onClick={() => {postUpdate(item.id)}}>Change</button>
    </div>




    <div className={cls.button_data}>
      <button 
        className={cls.delete_button} 
        onClick={() => {
          deleteTodo(item.id).then(() => {
            setMonitoring(Date.now())
          })
        }}
      >
        <AiFillDelete  className={cls.delete_button_icons}/>
      </button>


      <button 
        className={cls.completed_button} 
        onClick={() => {completedTodo(item.id).then(() => {setMonitoring(Date.now())})}}
      >
        <BiCheck className={cls.completed_button_icons}/> 
      </button>

      <button
        onClick={() => setIsDropdown(prev => !prev)} 
        className={cls.change_button}
      >
        <FaEdit className={cls.change_button_icons}/>
      </button>

    </div>
  </div>
  )
}

export default TodoItem