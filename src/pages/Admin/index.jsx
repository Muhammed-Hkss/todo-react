import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTodo } from '../../config'
import cls from './Admin.module.scss'
import {IoIosArrowBack} from "react-icons/io";
import useAlert from '../../hooks/useAlert';
import { useForm } from 'react-hook-form';
 

const Admin = () => {
  // const [title, setTitle] = useState('')
	// const [desc, setDesc] = useState('')
	// const [date, setDate] = useState('')
	// const [validate, setValidate] = useState(true)
  const navigate = useNavigate()
  const { actions } = useAlert()
  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const resetInputValues = () => {
    setTitle('')
		setDate('')
		setDesc('')
  }

  // const createTodoHandler = (e) => {
    
  //   e.preventDefault()
  //   if ( title  && date ) {
  //     // setValidate(true)
  //     const body = {
  //       title,
	// 			content: desc,
	// 			date,
  //     }
  //     console.log(body);
  //     createTodo(body).then(resetInputValues) && actions.sweetAlert('успешно добавлен')
  //   } else {
  //     // setValidate(false)
  //   }
  // }

  const onSubmit = (data) => {
    if(data){
      createTodo(data).then(resetInputValues) && actions.sweetAlert('успешно добавлен')
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

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={cls.formBody}>
          <input
            className={cls.password_input}
						type='title'
            placeholder="Enter title"
            {...register("title", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <span className={cls.title_span}>
            {errors.title?.type === "required" && "title is required"}
            {errors.title?.type === "minLength" && "Entered title is less than 5 characters"}
            {errors.title?.type === "maxLength" && "Entered title is more than 20 characters"}
          </span>
        </div>

        <div className={cls.formBody}>
          <input
            className={cls.password_input}
						type='content'
            placeholder="Enter content"
            {...register("content", {
              required: true,
              minLength: 7,
              maxLength: 70,
            })}
          />
          <span className={cls.content_span}>
            {errors.content?.type === "required" && "content is required"}
            {errors.content?.type === "minLength" && "Entered content is less than 7 characters"}
            {errors.content?.type === "maxLength" && "Entered content is more than 70 characters"}
          </span>
        </div>

        <div className={cls.formBody}>
          <input
						type='date'
            placeholder="Enter date"
            {...register("date", {
              required: true,
            })}
					/>
          <span>
            {errors.title?.type === "required" && "date is required"}
          </span>
        </div>

        <div className={cls.formFooter}>
          <button type="submit">submit</button>
        </div>
      </form>
      {/* <form>
        <span className={cls.errorRes}>
          {!validate ? 'required fields': ''}
        </span>
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
      </form> */}
    </div>
    </>
  )
}

export default Admin