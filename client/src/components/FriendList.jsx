/* eslint-disable react/prop-types */
import { style } from '../css';

function FriendList({ props }) {
    return (
        <div className={style.FriendListContainer}>

            <div className="flex justify-start items-center  bg-gray-200  rounded-[100%] w-10 h-10 ">
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

export default FriendList