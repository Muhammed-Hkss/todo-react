import React from 'react'
import cls from './Navbar.module.scss'
import {  Link, useNavigate } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'



const Navbar = () => {
  const [open , setOpen] = React.useState(false)
  const navigate = useNavigate()

  const logoutHandler =  (e) => {
		e.preventDefault()
		localStorage.clear()
		window.location.reload()
	}


  let menuRef = React.useRef()

  React.useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }

    document.addEventListener("mousedown" , handler)


    return() =>{
      document.removeEventListener("mousedown" , handler)
    }
  } , [])


  return (
    <div className={cls.navbar_container}>

      <div className={cls.row}>

        <div className={cls.logo_data}>
          <h2 className={cls.logo_text}>TODO API</h2>
        </div>
        

        
        <div>
          <div className={cls.menu_container} ref={menuRef}>
            <div className={cls.menu_trigger} onClick={() => {setOpen(!open)}}>
              <BiMenu className={cls.menuButton}/>
            </div>
            <div className={`${cls.dropdown_menu} ${open? `${cls.active}` : `${cls.inactive}`}`}>
              <h3 className={cls.menuLogo}>
                TODOS
                <br/>

                  <Link className={cls.admin_btn} to='/admin'>admin</Link>
                  <Link
                    to='/login'
                    className={cls.logout_btn} 
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
              </h3>
              <div>
                <MobileDropdownItem />  
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

function MobileDropdownItem(props){
  return(
    <React.Fragment>
      <div className={cls.MobileDropdownContainer}>
      </div>
    </React.Fragment>
  )
}


export default Navbar
