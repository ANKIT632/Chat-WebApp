import { style } from '../css';
import SideBar from './SideBar';
import ChatArea from './ChatArea';

function MainContainer() {
  return (
    <div className={style.mainContainer}>
      <SideBar/>
      <ChatArea/>
    </div>
  )
}

export default MainContainer