import React, { useState } from 'react';
import UserTable from './UserTable';
import CreateUser from './CreateUser';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleCreate = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserTable users={users} />
      <CreateUser onCreate={handleCreate} />
    </div>
  );
};

export default App;
