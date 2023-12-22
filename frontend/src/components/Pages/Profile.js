import React from "react";

const Profile = () => {
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px ",
            paddingBottom:"2rem",
            borderBottom:"1px solid black",
        }}>
            <div>
                <img style={{width:"160px",height:"160px",borderRadius:"80px"}} 
                src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile"/>
                </div>
            <div>
                    <h1>Siva</h1>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                            <h6>30 Posts</h6>
                            <h6>40 Followers</h6>
                            <h6>40 following</h6>
                    </div>
            </div>
            
        </div>
        <div className="gallery">
                <img className="item" src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="item" src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="item" src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="item" src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="item" src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="item" src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
    </div>
  );
};

export default Profile;
