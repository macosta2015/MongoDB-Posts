import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUserDeleted = (id) => {
    setUsers(users.filter(user => user._id !== id));
  };

  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>MERN User Management</h1>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList users={users} onUserDeleted={handleUserDeleted} />
    </div>
  );
}

export default App;