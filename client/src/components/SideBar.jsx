import { style } from '../css';
import { MdAccountCircle } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import FriendList from './FriendList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {useSelector} from 'react-redux'

function SideBar() {
   const navigate=useNavigate();

  
//    console.log("theme",useSelector((state)=>state.themeKey));

  const [conversations ,setConversation]=useState([
    {
        name:"Test1",
        lastMessage:"Last message 1",
        timeStamp:"today"
    },
    {
        name:"Test 2",
        lastMessage:"Last message 2",
        timeStamp:"today"
    },
    {
        name:"Test 3",
        lastMessage:"Last message 3",
        timeStamp:"today"
    }
  ])

  // handler Navigate

  const navigateHandler=(path)=>{
    console.log(path)
        navigate(path);
  }

    return (
        <div className={style.SideBarContainer}>

            <div className={style.SideBarHeader}>
                <div >
                    <MdAccountCircle className={style.icon} />
                </div>
                <div className='flex max-sm:flex-col max-sm:justify-between max-sm:gap-2'>
                    <IoMdPersonAdd className={style.icon} onClick={()=>navigateHandler('users')} />
                    <AiOutlineUsergroupAdd className={style.icon} onClick={()=>navigateHandler('groups')} />
                    <IoIosAddCircle className={style.icon} onClick={()=>navigateHandler('create-group')} />
                    
                    {/* <IoMdMoon className={style.icon} onClick={()=>navigateHandler('')} /> */}
                </div>



            </div>
            <div className={style.SideBarSearch}>
                <FiSearch className={style.unclickIcon} />
                <input type="text" placeholder="search" className='outline-none pl-1 rounded-lg text-sm' />

            </div>

            <div className={style.sideBarFriendList}>

            {   conversations.map((conversation,idx)=><FriendList key={idx} props={conversation} />)
                
            }    
            </div>

        </div>
    )
}

export default SideBar