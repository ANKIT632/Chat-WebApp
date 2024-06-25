import { useState } from 'react';
import { style } from '../css';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={style.LoginContainer}>
            <div className='flex-[0.3] flex flex-col gap-4 items-center bg-blue-50 rounded-l-xl justify-center'>
                <img src="../icons/chatIcon.png" alt='icon' className='w-[80%]' />
                <p className='font-bold md:text-xl'>LetsChat</p>
            </div>
            <div className='flex-[0.7] rounded-r-xl flex justify-center items-center text-center'>
                <form className=' flex flex-col w-fit gap-3  md:w-[35%]'>
                    <p className='text-blue-500 font-semibold'>Login to your Account</p>
                    <input
                            type='text'
                            placeholder='name'
                            className='p-2 rounded-md shadow border w-full outline-none'
                        />
                    <div className='relative shadow rounded-md border'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            className='p-2 rounded-md  w-full outline-none  '
                        />
                        <div
                            className='absolute inset-y-0   right-0 pr-3 flex items-center cursor-pointer '
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                    </div>
                    <button type='submit' className=' shadow border text-green-500 font-semibold h-8 rounded-md active:bg-slate-100 hover:bg-slate-50'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login