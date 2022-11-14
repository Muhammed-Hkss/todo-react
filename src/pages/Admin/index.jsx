import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTodo } from '../../config'
import cls from './Admin.module.scss'
import {IoIosArrowBack} from "react-icons/io";
import useAlert from '../../hooks/useAlert';


const Admin = () => {
  const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [date, setDate] = useState('')
	const [validate, setValidate] = useState(true)
  const navigate = useNavigate()
  const { actions } = useAlert()

  const resetInputValues = () => {
    setTitle('')
		setDate('')
		setDesc('')
  }

  const createTodoHandler = (e) => {
    
    e.preventDefault()
    if ( title  && date ) {
      setValidate(true)
      const body = {
        title,
				content: desc,
				date,
      }
      createTodo(body).then(resetInputValues) && actions.sweetAlert('успешно добавлен')
    } else {
      setValidate(false)
    }
  }
  

  return (
    <>
    <div>
      <IoIosArrowBack className={cls.backButton}
        onClick={() => navigate('/')}
			/>
    </div>
    <div className={cls.formContainer}>
      <form>
        <span className={cls.errorRes}>
          {!validate ? 'required fields': ''}
        </span>
        <div className={cls.formHeader}>
          <h3></h3>
        </div>
        <div className={cls.formBody}>
          <input
						type='text'
						value={title}
						name='title'
						onChange={(e) => setTitle(e.target.value)}
						placeholder=' Title...'
					/>
					<input
						type='text'
						value={desc}
						name='descprtion'
						onChange={(e) => setDesc(e.target.value)}
						placeholder=' Description...'
					/>
					<input
						type='date'
						value={date}
						name='date'
						onChange={(e) => setDate(e.target.value)}
						placeholder=' Date...'
					/>
        </div>
        <div className={cls.formFooter}>
					<button onClick={(e) => createTodoHandler(e)}>Add</button>
				</div>
      </form>
    </div>
    </>
  )
}

export default Admin