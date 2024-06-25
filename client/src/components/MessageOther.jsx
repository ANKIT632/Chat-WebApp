/* eslint-disable react/prop-types */
import { style } from '../css';

function MessageOther() {

    const props={name:"John", message:"Hello, how are you?"}
  return (
    <div className={style.MessageOtherContainer}>
        <div  className='flex '>
            <div className='flex   bg-gray-200  rounded-[100%] w-5 h-5'><img src="https://cdn-icons-png.freepik.com/512/9203/9203764.png" alt="img"/></div>
            <div className={style.messageDiv+ ' bg-gray-400 rounded-r-lg'}>
                <p  className='text-[10px] font-bold text-black'>{props.name}</p>
                <p className='text-xs font-bold text-white'>{props.message}</p>
                <p className={style.MessageTimeStemp}>12:10 pm</p>
            </div>
        </div>
    </div>
  )
}

export default MessageOther;