import './App.css'
import {style} from './css'
import MainContainer from './components/MainContainer'
import Login from './components/Login'
import {Route,Routes} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import ChatArea from './components/ChatArea'
import Groups from './components/Groups'
import CreateGroup from './components/CreateGroup'
import Users from './components/Users'
function App() {


  return (
 
     <div className={"App " + style.appDiv}>
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='app' element={ <MainContainer/> }>
            <Route path='welcome' element={<WelcomePage/>}/>
            <Route path='chat/:id' element={<ChatArea/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='groups' element={<Groups/>}/>
            <Route path='create-group' element={<CreateGroup/>}/>
        
        </Route>
      </Routes>
      
     </div>
  
  )
}

export default App
