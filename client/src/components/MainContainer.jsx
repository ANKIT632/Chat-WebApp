import { style } from '../css';
import SideBar from './SideBar';
import ChatArea from './ChatArea';
import WelcomePage from './WelcomePage';
import CreateGroup from './CreateGroup';
import UsersGroup from './UsersGroup';

function MainContainer() {
  return (
    <div className={style.mainContainer}>
      <SideBar/>
      {/* <ChatArea/> */}
      {/* <WelcomePage/> */}
      {/* <CreateGroup/> */}
      <UsersGroup/>
    </div>
  )
}

export default MainContainer