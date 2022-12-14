import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhoneListing from './Components/PhoneListing';
import PhoneCreate from './Components/PhoneCreate';
import PhoneDetails from './Components/PhoneDetails';
import PhoneEdit from './Components/PhoneEdit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhoneListing/>}></Route>
          <Route path="/phones/create" element={<PhoneCreate/>}></Route>
          <Route path="/phones/details/:phoneid" element={<PhoneDetails/>}></Route>
          <Route path="/phones/edit/:phoneId" element={<PhoneEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
