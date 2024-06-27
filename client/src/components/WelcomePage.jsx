import { useNavigate } from 'react-router-dom';
import { style } from '../css';

function WelcomePage() {
  const navigate= useNavigate();
  const userData=JSON.parse(localStorage.getItem("userData"));

  if(!userData){
     console.log("User Not Authenticated !!");
     navigate("/");
  }
  return (
    <div className={style.WelcomePageContainer}>
        <img src="../icons/chatIcon.png" alt="logo" className="w-[80%] md:w-[40%]"/>
         <p className='text-xs font-mono md:text-sm font-semibold text-blue-300'>Hi, {userData.name}</p>
        <p className="text-xs font-mono md:text-sm font-semibold">Welcome to LetsChat, the best place for all your chatting needs!</p>
    </div>
  )
}

export default WelcomePage