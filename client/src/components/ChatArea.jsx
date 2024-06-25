import { style } from '../css';
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import MessageOther from './MessageOther';
import MessageSelf from './MessageSelf';


function ChatArea() {
    return (
        <div className={style.ChatAreaContainer}>
            <div className={style.ChatAreaHeader}>
                <div className={style.ProfileIcon}>
                    <img src="https://cdn-icons-png.freepik.com/512/9203/9203764.png" alt="icon" className='cursor-pointer' />
                </div>
                <div className="flex flex-1 flex-col  text-xs justify-center ml-2">
                    <span className='font-semibold text-gray-600'>Test 1</span>
                    <span className='text-xs text-gray-500 '>today</span>
                </div>
                <div className="  flex items-center text-xl text-gray-600 ">
                    <MdDelete className={style.icon} />
                </div>
            </div>


            <div className={style.ChatAreaMessageContainer}>
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
            </div>


            <div className={style.ChatAreaInputText}>

                <input type='text' placeholder='Lets talk...' className='outline-none pl-4 flex-1 rounded-lg ' />
                <IoIosSend className={style.icon + " text-3xl md:text-4xl"} />
            </div>
        </div>
    )
}

export default ChatArea;