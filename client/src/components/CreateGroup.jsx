import { style } from '../css';
import React, { useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateGroup() {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const nav = useNavigate();
    if (!userData) {
      console.log("User not Authenticated");
      nav("/");
    }
    const user = userData.data;
    const [groupName, setGroupName] = useState("");
    const [open, setOpen] = React.useState(false);
  
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("User Data from CreateGroups : ", userData);

  const createGroup = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post(
      "http://localhost:5000/chat/createGroup",
      {
        name: groupName,
        users: '["647d94aea97e40a17278c7e5","647d999e4c3dd7ca9a2e6543"]',
      },
      config
    );
    nav("/app/groups");
  };

    return (
        <div className={style.CreateGroupContainer}>
            <div className={style.CreateGroupInnerContainer}>
                <input type='text' placeholder='Create group' className='h-10 outline-none bg-white rounded-lg pl-3' />
                <MdDoneOutline className={style.icon} onClick={()=>{
                    handleClickOpen();
                }} />

            </div>
        </div>
    )
}

export default CreateGroup;