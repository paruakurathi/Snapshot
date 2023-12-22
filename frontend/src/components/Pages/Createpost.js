import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";



const CreatePost = () => {
    const navigate = useNavigate()
  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(""); 
  const [url, setUrl] = useState("");// Use null instead of an empty string

    useEffect(()=>{

        if(url){
        fetch("/createpost", {
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title,
              body,
              pic:url
            })
          }).then(res => res.json())
          .then(data => {
          
                  if(data.error){
                      M.toast({html: data.error,classes:"#c62828 red darken-3"})
                  }
                  else{
                      M.toast({html: "Created Post successfully",classes:"#43a047 green darken-1"})
                      navigate('/')
                    
                  }
          })
          .catch(error => {
              console.error("Error:", error);
            });
        }
        },[url])


  const postDetails =()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","snapshot")
    data.append("cloud_name","dqk3yombo")
    fetch("/cloud_name",{
        method:"post",
        headers:{
            "Content-Type": "application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
        setUrl(data.url);
    })
    .catch(err=>{
        console.log(err);
    })

    
   
}

  

  return (
    <div
      className="card input-field"
      style={{
        margin: "10px auto",
        maxWidth: "500px",
        textAlign: "center",
        padding: "50px",
        button: "center",
      }}
    >
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn">
          <span>Upload Pic</span>
          <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
        <button
          className="btn #1e88e5 blue darken-1"
          onClick={() => postDetails()}
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
