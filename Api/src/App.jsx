import React, { useState } from 'react';
import UserTable from './UserTable';
import CreateUser from './CreateUser';
import { createContext } from 'react';
export const UserContext = createContext()

const App = () => {
  const [users, setUsers] = useState([]);
  // const [users, setUsers] = useState([]);

  // const handleCreate = (user) => {
  //   console.log(users);
  //   setUsers([...users, user]);
  // };

  return (
      <UserContext.Provider value={{
        users: users,
        setUsers: setUsers
      }}>
        <UserTable />
        <CreateUser  />
      </UserContext.Provider>
  );
};

export default App;
