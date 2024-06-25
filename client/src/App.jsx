import './App.css'
import {style} from './css'
import MainContainer from './components/MainContainer'
import Login from './components/Login'

function App() {


  return (
 
     <div className={"App " + style.appDiv}>
      <MainContainer/>
      {/* <Login/> */}
     </div>
  
  )
}

export default App
