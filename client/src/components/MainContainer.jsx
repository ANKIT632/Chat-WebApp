import { createContext, useState } from 'react';
import { style } from '../css';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";

export const myContext = createContext();

function MainContainer() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div className={style.mainContainer}>
          <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
      <SideBar/>
      <Outlet/>
      </myContext.Provider>
    </div>
  )
}

export default MainContainer