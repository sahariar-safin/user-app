import logo from './logo.svg';
import './App.css';
import User from './componant/User/User';
import userData from './fakeData/data.json'
import { useEffect, useState } from 'react';
import Header from './componant/Header/Header';


function App() {
  const [user, setUser] = useState(userData);
  return (
    <div>
      <Header></Header>
      <div className="user-container">
        {user.map(user => <User user={user}></User>)}
      </div>
    </div>
  );
}

export default App;
