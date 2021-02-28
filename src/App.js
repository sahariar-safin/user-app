import logo from './logo.svg';
import './App.css';
import User from './componant/User/User';
import userData from './fakeData/data.json'
import { useEffect, useState } from 'react';
import Header from './componant/Header/Header';
import Cart from './componant/Cart/Cart';


function App() {
  const [user, setUser] = useState(userData);

  const [addedUser, setAddUser] = useState([])
  const handleAdd = (userAdd) => {
    const newList = [...addedUser, userAdd];
    setAddUser(newList);
  }
  return (
    <div>
      <Header></Header>
      <div className="body">
        <div className="user-container">
          {user.map(user => <User handleAdd={handleAdd} user={user}></User>)}
        </div>
        <div className="cart-container">
          <Cart cart={addedUser}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
