import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cls from './Auth.module.scss'
import { signIn } from '../../config'
import { useForm } from 'react-hook-form'

const Login = () => {
  const [email , setEmail] = React.useState('') 
  const [password , setPassword] = React.useState('') 

	const [responseErrors, setResponseErrors] = React.useState(false)

  const navigate = useNavigate()
  // const isActive = localStorage.getItem('isActivated')

// front.hkss.10
  

  // const authHandle =  (e) => {
  //   e.preventDefault()
  //   if( email && password ){
  //     const body = {
  //       email,
  //       password,
  //     }
  //     console.log(body);
  //     signIn(body).then(r => {
  //       // console.log(r);
  //       if (r.data.accessToken) {
  //         localStorage.setItem('userToken', r.data.accessToken)
  //         localStorage.setItem('userId', r.data.user.id)
	// 				localStorage.setItem('isActivated', r.data.user.isActivated)
  //         // window.location.reload()
  //         navigate('/')
  //       }
  //     })
  //   }
  // }
  
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



  console.log(responseErrors);

  return (
    <div className={cls.authContainer}>
      <form className={cls.register_data} onSubmit={handleSubmit(onSubmit)}>
        {/* {
          isActive === 'false' ? <p>1111</p> : <p>2222</p>
        } */}
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
            {/* <label>Password</label> */}
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
					{/* <button onClick={(e) => authHandle(e)}>Login</button> */}
					<button type="submit">Login</button>
					<Link to='/register'>Create an account</Link>
				</div>
			</form>
    </div>
  )
}

export default Login

// sdfsdfs@gmail.com
// asfaff


