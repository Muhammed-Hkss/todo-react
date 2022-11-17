import React, { useState } from 'react'
import cls from './TodoItem.module.scss'
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { BiCheck , BiX} from 'react-icons/bi'

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
            width: '40px' , 
            height: '40px' , 
          }} 
        /> : <p></p>
      }
    </div>


    <div className={`${cls.todo_input_data} ${isDropdown ? cls.active : ''}`}>
      <div
        className={`${cls.todo_content_data} ${isDropdown ? cls.active : ''}`}
      >
        <p className={cls.todo_content}>{item.content}</p>
      </div>

      <input 
        className={`${cls.todo_input} ${isDropdown ? cls.active : ''}`}
        onChange={(e) => setChangedInput({ ...item, title: e.target.value })}
        defaultValue={item.title}
      />

      <input 
        className={`${cls.todo_input} ${isDropdown ? cls.active : ''}`}
        onChange={(e) => setChangedInput({ ...item, content: e.target.value })}
        defaultValue={item.content}
      />
      <button className={`${cls.change_btn} ${isDropdown ? cls.active : ''}`} onClick={() => {postUpdate(item.id)}}>Change</button>
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
        onClick={() => 
          {completedTodo(item.id)
            .then(() => 
            {setMonitoring(Date.now())}
            
            )
          }
        }
      >
        {
          item.completed === true ? 
          <BiX className={cls.completed_bix_button_icons}/> :
          <BiCheck className={cls.completed_button_icons}/>
        }

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