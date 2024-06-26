import { style } from '../css';
import { MdDoneOutline } from "react-icons/md";

function CreateGroup() {
    return (
        <div className={style.CreateGroupContainer}>
            <div className={style.CreateGroupInnerContainer}>
                <input type='text' placeholder='Create group' className='h-10 outline-none bg-white rounded-lg pl-3' />
                <MdDoneOutline className={style.icon} />

            </div>
        </div>
    )
}

export default CreateGroup;