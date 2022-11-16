import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cls from './Auth.module.scss'
import { signIn } from '../../config'
import { useForm } from 'react-hook-form'

const Login = () => {
  const navigate = useNavigate()
  const isActive = localStorage.getItem('isActivated')


  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    if(data){
      signIn(data).then(r => {
        console.log(r);
        if(r.data.accessToken){
          localStorage.setItem('userToken', r.data.accessToken)
          localStorage.setItem('userId', r.data.user.id)
					localStorage.setItem('isActivated', r.data.user.isActivated)
          navigate('/')
        }
      })
    }
  };



  return (
    <>
      <div style={{display:'flex' , justifyContent:'center'}}>
        {
          isActive === 'false' ? 
          <div>
            <p style={{ color:'gray'}}>На вашу почту отправлено, ссылка на активацию аккаунта</p>
            <p style={{ color:'gray'}}>Прежде чем перейти на Главную, активируйте аккаунт</p>
          </div> : ''
        }
      </div>
      <div className={cls.authContainer}>
        <form className={cls.register_data} onSubmit={handleSubmit(onSubmit)}>
          <div className={cls.formHeader}>
            <h1 style={{textAlign:'center'}}>Authorization</h1>
          </div>
          

          <div className={cls.input_data}>

            <div className={cls.email_input_data}>
              <input
                className={cls.email_input}
                type='email'
                placeholder="Enter primary email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <span className={cls.email_span}>
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                  "Entered email is in wrong format"}
              </span>
            </div>




            <div className={cls.password_input_data}>
              <input
                className={cls.password_input}
                type='password'
                placeholder="Enter password"
                {...register("password", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
              />
              <span className={cls.password_span}>
                {errors.email?.type === "required" && "password is required"}
                {errors.password?.type === "minLength" && "Entered password is less than 5 characters"}
                {errors.password?.type === "maxLength" && "Entered password is more than 20 characters"}
              </span>
            </div>

          </div>
          




          <div className={cls.formFooter}>
            <button type="submit">Login</button>
            <Link to='/register'>Create an account</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login


