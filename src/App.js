import "./App.css"
import Topbar from "./Component/Topbar/Topbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import Home from "./Pages/Home/Home"; 
import {Routes,Route} from "react-router-dom"
import UserList from "./Pages/UsersList/UserList";
import User from "./Pages/user/User";

 
function App() {
  return (
   <div>
   <Topbar/>
   <div className="container">
   <Sidebar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/UserList" element={<UserList/>}/>
    <Route path="/User/:userid" element={<User/>}/>

   </Routes>
   </div>
   </div>
    );
}

export default App;
