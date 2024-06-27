import { useNavigate } from 'react-router-dom';
import { style } from '../css';
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'

function Users() {
    const navigate=useNavigate()
    const [isLoding,setIsLoading]=useState(false);

    const userData=JSON.parse(localStorage.getItem('userData'));

    const [users,setUsers]=useState([]);

    if(!userData){
        console.log('unAuthorised user');
        navigate('/');
    }

    const getUsers=async()=>{
       setIsLoading(true);
        try{
              const config={
                headers:{
                    Authorization:`Bearer ${userData.token}`,
                }
              }

              let res=await axios.get('http://localhost:5000/user/fetchUsers',config)

       
              console.log(res.data.users);
              setUsers(res.data.users);
              setIsLoading(false);


        }

        catch(err){
          console.log(err);
        }
    }

   useEffect(()=>{
    
      getUsers();
   },[])

    return (
        <div className='p-1.5  flex flex-col  sm:flex-[0.75]  rounded-r-lg  w-full gap-2 max-sm:flex-1  '>
            <div className='flex  bg-white p-2 shadow rounded-lg gap-2'>
                <img src='../icons/chatIcon.png' className='w-5'/>
                <p className='font-semibold font-mono'>Online Users</p>
            </div>

            <div className={style.UsersGroupSearch}>
                <FiSearch className={style.unclickIcon} />
                <input type="text" placeholder="Search" className='outline-none pl-1 rounded-lg text-sm w-full' />
            </div>
 
            <div className='overflow-y-scroll p-3 flex flex-col gap-2 bg-blue-100 shadow-md rounded-lg flex-1'>
            {
              users?.map((item,idx)=>{
              
                 return (<div className='flex w-full bg-white p-2 rounded-lg items-center gap-2 hover:bg-gray-100 active:bg-gray-200' key={idx}>
                    <p className='h-8 w-8 rounded-full bg-gray-300 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>{item.name}</p>
                </div>)})

            }
                </div>
          
        </div>
    )
}

export default Users;