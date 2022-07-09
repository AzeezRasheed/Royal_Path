
import "./App.css";

import {Route,Routes} from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import ForNavbar from "./components/ForNavbar/ForNavbar";
import Payment from "./components/Payment/Payment";

const App = () => {
  return (
 
     <Routes>
     <Route path="/" element={<ForNavbar/>}/>
     <Route path="/registration" element={<Registration/>}/>
     <Route path="/payment" element={<Payment/>}/>
   </Routes>
   
  );
};

export default App;
