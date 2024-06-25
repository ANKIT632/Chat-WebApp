/* eslint-disable react/prop-types */
import { style } from '../css';

function MessageSelf() {

    const props = { name: "John", message: "Hello, how are you? " }

    return (
        <div className={style.MessageSelfContainer}>
            <div className={style.messageDiv + ' bg-blue-400 rounded-l-lg'} >
                <p className='text-xs font-bold text-white '>{props.message}</p>
                <p className={style.MessageTimeStemp}>12:10 pm</p>
            </div>
        </div>
    )
}

export default MessageSelf