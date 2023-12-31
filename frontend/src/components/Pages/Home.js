import React, { useState,useEffect } from "react";

const Home =()=>
{
    const [data,setData] =useState([])
    useEffect(()=>{
        fetch('/allPost',{
        headers:{
            "Content-Type": "application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
        setData(result.posts);
    })
    .catch(err=>{
        console.log(err);
    })

    },[])

        const likePost =(id)=>{
            fetch('/like',{
                method:"put",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                  },
                  body: JSON.stringify({
                    postId:id
                  })
                }).then(res => res.json())
                .then(result=>{
                    console.log(result);
                })
            }
            const unlikePost =(id)=>{
                fetch('/like',{
                    method:"pull",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":"Bearer "+localStorage.getItem("jwt")
                      },
                      body: JSON.stringify({
                        postId:id
                      })
                    }).then(res => res.json())
                    .then(result=>{
                        console.log(result);
                    })
                }
        
    return(
        <div className="home">
            {
                data.map(item=>{
                    return (
                        <div className=" card home-card" key={item._id}>
                <h5>{item.postedBy.name}</h5>
                <div className="card-image">
                    <img src={item.photo}/>
                </div>
                <div className="home-card-content">

                <i className="material-icons" style={{color:"red"}}>favorite</i>
                <i className="material-icons" onClick={()=>{
                    {likePost(item._id)}
                }} >thumb_up</i>
                <i className="material-icons"  onClick={()=>{
                    {unlikePost(item._id)}
                 }} >thumb_down</i>
                <h6>{item.likes.length} Likes</h6>
                    <h6>{item.title}</h6>
                    <p>{item.body}</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            

                    )
                })
            }
            
            
        </div>
    )
}

export default Home