import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './apps/Login/Login';
import Register from './apps/Register/Register';
import PrivateRoutes from './components/PrivateRoutes';
import { routesList } from './utils/routesList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Navigate to='/'/>}/>

        
          <Route element={<PrivateRoutes/>}>
            {
              routesList.map(item => {
                return <Route key={item.id} path={item.route} element={item.element}/>
              })
            }
          </Route>
      </Routes>
    </div>
  );
}

export default App;
