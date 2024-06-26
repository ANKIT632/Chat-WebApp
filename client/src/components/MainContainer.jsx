import { style } from '../css';
import SideBar from './SideBar';
import ChatArea from './ChatArea';
import WelcomePage from './WelcomePage';
import CreateGroup from './CreateGroup';
import UsersGroup from './Groups';
import { Outlet } from 'react-router-dom';

function MainContainer() {
  return (
    <div className={style.mainContainer}>
      <SideBar/>
      <Outlet/>

      {/* <ChatArea/> */}
      {/* <WelcomePage/> */}
      {/* <CreateGroup/> */}
      {/* <UsersGroup/> */}
    </div>
  )
}

export default MainContainer