import React,{useState,useContext}from "react";
import { Link,useNavigate} from "react-router-dom";
import M from "materialize-css";
import {UserContext} from '../../App'


const Signin = () => {
  const { state, dispatch } = useContext(UserContext); // Correct usage of useContext
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = () => {
    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      M.toast({ html: "Invalid email", classes: "#c62828 red darken-3" });
    }

    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({ html: "Signed in successfully", classes: "#43a047 green darken-1" });
          navigate('/');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mycard">
      <div className="card input-field">
        <h2>SnapShot</h2>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn #1e88e5 blue darken-1" onClick={() => PostData()}>Signin</button>
        <h5><Link to="/signup">Don't have an account? Click here</Link></h5>
      </div>
    </div>
  );
};

export default Signin;
