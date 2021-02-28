
import './App.css';
import { useEffect, useState } from 'react';
import userData from './fakeData/fakeData.json'
import User from './components/User/User';
import Header from './components/Header/Header';
import Sum from './components/List-of-User/Sum';

function App() {
  const [users,setUser] = useState([]);
  const [wage, setWage] = useState([]);
  
  const handleEvent = (total) =>{
    console.log(wage)
    const newWage = [...wage , total];
    setWage(newWage)
  }

  useEffect(() => {
    console.log(userData)
    setUser(userData)
  },[])

  return (
     <div className="App">
       <Header></Header>
       <Sum sum={wage}></Sum>
      {
        users.map(user => <User handleEvent={handleEvent} user={user}></User>)
      }
    </div>
  );
}

export default App;
