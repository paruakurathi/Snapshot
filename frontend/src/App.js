import React, { createContext,useEffect,useReducer, useContext } from 'react'
import NavBar from './components/Navbar'
import "./App.css"
import { BrowserRouter as Router,Route,Routes,useNavigate} from 'react-router-dom'
import Home from './components/Pages/Home'
import Profile from './components/Pages/Profile'
import Signin from './components/Pages/Signin'
import Signup from './components/Pages/Signup'
import CreatePost from './components/Pages/Createpost'
import {initailState,reducer} from './reducers/userReducer'



export const UserContext = createContext()

const Routing =()=>{
  const navigate = useNavigate()
  
  useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        navigate('/')
      }
      else{
        navigate('/signin')
      }
  },[])
  return (
    
      <Routes>
      <Route exact path='/' element={<Home/>}/>
        <Route  path='/signin' element={<Signin/>}/>
        <Route  path='/signup' element={<Signup/>}/>
        <Route  path='/profile' element={<Profile/>}/>
        <Route  path='/createpost' element={<CreatePost/>}/>
        </Routes>
    

  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initailState)
  
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <Router>
        <NavBar/>
        <Routing/>
    </Router>
    </UserContext.Provider>
  )
}

export default App
