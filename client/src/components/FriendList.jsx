/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { style } from '../css';

function FriendList({ props }) {

    const navigate = useNavigate();
    return (
        <div className={style.FriendListContainer} onClick={() => navigate('chat')}>

            <div className={style.ProfileIcon}>
                <img src="https://cdn-icons-png.freepik.com/512/9203/9203764.png" alt="icon" />
            </div>
            <div className=" flex flex-1 flex-col t text-xs justify-center">
                <span className='font-semibold text-gray-600'>{props.name}</span>
                <span className='text-xs text-gray-500 '>{props.lastMessage}</span>
            </div>
            <div className="  text-end text-xs text-gray-400   self-end ">
                {props.timeStamp}
            </div>
        </div>
    )
}

export default FriendList;