import { style } from '../css';
import { MdAccountCircle } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import FriendList from './FriendList';
import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { myContext } from "./MainContainer";


function SideBar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { refresh, setRefresh } = useContext(myContext);

    const userData = JSON.parse(localStorage.getItem('userData'));

    const [conversations, setConversations] = useState([]);

    if (!userData) {
        navigate('/');
    }



    const fetchChat = async () => {

        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        try {

            const res = await axios.get('http://localhost:5000/chat/', config);
            setConversations(res.data);
        }

        catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        fetchChat();
    }, [refresh])


    //    console.log("theme",useSelector((state)=>state.themeKey));



    // handler Navigate

    const navigateHandler = (path) => {
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
                    <IoMdPersonAdd className={style.icon} onClick={() => navigateHandler('users')} />
                    <AiOutlineUsergroupAdd className={style.icon} onClick={() => navigateHandler('groups')} />
                    <IoIosAddCircle className={style.icon} onClick={() => navigateHandler('create-group')} />

                    {/* <IoMdMoon className={style.icon} onClick={()=>navigateHandler('')} /> */}
                </div>



            </div>
            <div className={style.SideBarSearch}>
                <FiSearch className={style.unclickIcon} />
                <input type="text" placeholder="search" className='outline-none pl-1 rounded-lg text-sm' />

            </div>

            <div className={style.sideBarFriendList}>

                {conversations.map((conversation, idx) => 
                {
                    if (conversation.users.length === 1) {
            return <div key={idx}></div>;
          }            

                  if (conversation.latestMessage === undefined) {
                    return(
                <div className={style.FriendListContainer} onClick={() => navigate(
                      "chat/" +
                        conversation._id +
                        "&" +
                        conversation.users[1].name
                    )} key={idx}>

                    <div className={style.ProfileIcon}>
                        <img src="https://cdn-icons-png.freepik.com/512/9203/9203764.png" alt="icon" />
                    </div>
                    <div className=" flex flex-1 flex-col t text-xs justify-center">
                        <span className='font-semibold text-gray-600'>{conversation.users[1].name}</span>
                        <span className='text-xs text-gray-500 '>{"   No previous Messages, click here to start a new chat"}</span>
                    </div>
                    {/* <div className="  text-end text-xs text-gray-400   self-end ">
                        {conversation.timeStamp}
                    </div> */}
                  </div>)}
                  else{
                    return(
                        <div className={style.FriendListContainer} onClick={() => navigate(
                      "chat/" +
                        conversation._id +
                        "&" +
                        conversation.users[1].name
                    )} key={idx}>

                    <div className={style.ProfileIcon}>
                        <img src="https://cdn-icons-png.freepik.com/512/9203/9203764.png" alt="icon" />
                    </div>
                    <div className=" flex flex-1 flex-col t text-xs justify-center">
                        <span className='font-semibold text-gray-600'>{conversation.users[1].name}</span>
                        <span className='text-xs text-gray-500 '>                  {conversation.latestMessage.content}
</span>
                    </div>
                    {/* <div className="  text-end text-xs text-gray-400   self-end ">
                        {conversation.timeStamp}
                    </div> */}
                  </div>
                    )
                  }
                })

                }
            </div>

        </div>
    )
}

export default SideBar