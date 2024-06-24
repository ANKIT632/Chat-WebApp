import { style } from '../css';
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


function ChatArea() {
  return (
    <div className={style.ChatAreaContainer}>
        <div className={style.ChatAreaHeader}>
        <div className="flex justify-start items-center  bg-gray-200  rounded-[100%] w-10 h-10 ">
                <img src="https://cdn-icons-png.freepik.com/512/9203/9203764.png" alt="icon" className='cursor-pointer'/>
            </div>
            <div className="flex flex-1 flex-col  text-xs justify-center ml-2">
                <span className='font-semibold text-gray-600'>Test 1</span>
                <span className='text-xs text-gray-500 '>today</span>
            </div>
            <div className="  flex items-center text-xl text-gray-600 ">
               <MdDelete className='cursor-pointer'/>
            </div>
        </div>
        <div className={style.ChatAreaMessageContainer}>message-Container</div>
        <div className={style.ChatAreaInputText}>text-area</div>
    </div>
  )
}

export default ChatArea;