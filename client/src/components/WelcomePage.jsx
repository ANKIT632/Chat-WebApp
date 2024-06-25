import { style } from '../css';

function WelcomePage() {
  return (
    <div className={style.WelcomePageContainer}>
        <img src="../icons/chatIcon.png" alt="logo" className="w-[80%] md:w-[40%]"/>
        <p className="text-xs font-mono md:text-sm font-semibold">Welcome to LetsChat, the best place for all your chatting needs!</p>
    </div>
  )
}

export default WelcomePage