import { style } from '../css';
import { FiSearch } from "react-icons/fi";

function GroupUsers() {
    return (
        <div className='p-1.5  flex  sm:flex-[0.75]  flex-col rounded-r-lg  w-full gap-2 max-sm:flex-1'>
            <div className='flex  bg-white p-2 shadow rounded-lg gap-2'>
                <img src='../icons/chatIcon.png' className='w-5'/>
                <p className='font-semibold font-mono'>Avilable Groups</p>
            </div>

            <div className={style.UsersGroupSearch}>
                <FiSearch className={style.unclickIcon} />
                <input type="text" placeholder="Search" className='outline-none pl-1 rounded-lg text-sm w-full' />
            </div>

            <div className='overflow-y-scroll p-3 flex flex-col gap-2 bg-blue-100 shadow-md rounded-lg '>
                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2 hover:bg-gray-100 active:bg-gray-200'>
                    <p className='h-8 w-8 rounded-full bg-gray-300 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

          
                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>

                <div className='flex w-full bg-white p-1 rounded-lg items-center gap-2'>
                    <p className='h-8 w-8 rounded-full bg-gray-100 text-cent'></p>
                    <p className='font-semibold  text-gray-500 md:w[50%] text-sm'>Test</p>
                </div>
                </div>
          
        </div>
    )
}

export default GroupUsers