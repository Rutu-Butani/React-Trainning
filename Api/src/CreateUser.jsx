import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from './App';

const CreateUser = () => {

  const {users,setUsers} = useContext(UserContext)
  // const handleCreate = (user) => {
  //   console.log(users);
  //   setUsers([...users, user]);
  // };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {id: users.length+1, first_name: firstName, last_name: lastName, email: email, avatar: "demo image" };
      const response = await axios.post('https://reqres.in/api/users', newUser)
      setUsers([...users,await response.data])
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
