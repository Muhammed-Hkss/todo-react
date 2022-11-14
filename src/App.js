import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './apps/Login/Login';
import Register from './apps/Register/Register';
import Main from './components/Main';
import Admin from './pages/Admin';
import PrivateRoutes from './components/PrivateRoutes';
import { routesList } from './utils/routesList';

function App() {
  const USER_TOKEN = localStorage.getItem('userToken')
  const isActive = localStorage.getItem('isActivated')


  

  return (
    <div className="App">


      
      {/* <Routes>
        {USER_TOKEN && (
          <>
            <Route path='/' element={<Main />} />
            <Route path='/admin' element={<Admin/>} />
          </>
        )}
        {!USER_TOKEN && (
          <>
            <Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
          </>
        )}
        <Route
					path='*'
					element={<Navigate to={USER_TOKEN ? '/' : '/login'} />}
					// element={<Navigate to={USER_TOKEN & isActive === true ? '/' : '/login'} />}
				/>

        <Route  element={<PrivateRoutes />}>

        </Route>
      </Routes> */}



      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Navigate to='/'/>}/>

        
          <Route element={<PrivateRoutes active={isActive} token={USER_TOKEN}/>}>
            {
              routesList.map(item => {
                return <Route key={item.id} path={item.route} element={item.element}/>
              })
            }
          </Route>

          {/* <Route path='*' element={<Navigate to=''/>}/> */}
       

      </Routes>
    </div>
  );
}

export default App;
