import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from '../App'

const NavBar =()=>{
    const {state, dispatch} = useContext(UserContext)
    const navigate = useNavigate()
    const renderList = () => {
        if (state) {
          return [
            <li key="profile"><Link to="/profile">Profile</Link></li>,
            <li key="createpost"><Link to="/createpost">CreatePost</Link></li>,
            <li><button className="btn #1e88e5 blue darken-1" onClick={() => {
                localStorage.clear()
                dispatch({type:"CLEAR"})
                navigate.push('/sigin')
            }}>Logout</button></li>
          ];
        } else {
          return [
            <li key="signin"><Link to="/signin">Signin</Link></li>,
            <li key="signup"><Link to="/signup">Signup</Link></li>
          ];
        }
      }
      
    return(
        <div>
        <nav>
                <div className="nav-wrapper white">
                <Link to={state?"Null":"/sigin"} className="brand-logo left">SnapShot</Link>
                        <ul id="nav-mobile" className="right">
                            {renderList()}
                        </ul>
                </div>
        </nav>
        </div>
        
    )
}

export default NavBar