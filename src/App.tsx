import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import { User } from './ApiInterfaces';
import UserCard from './UserCard';

function App() {
  const [usersArray, setUsersArray] = useState<User[]>([])

  const getUsersData = async () =>{
    try{
      const response = await axios.get('https://dummyjson.com/users')
      setUsersArray(response.data.users)
    }
    catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getUsersData()
  }, [])

  return (
    <div className="App">
      <div>
        {usersArray.map((user)=>(
          <p key={user.id}>{user.firstName} {user.lastName}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
