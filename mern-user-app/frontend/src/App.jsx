import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directory from './pages/Directory';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directorio" element={<Directory />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserForm from './components/UserForm';
// import UserList from './components/UserList';
// import './App.css';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5001/api/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error al obtener usuarios:', error);
//     }
//   };

//   const handleUserAdded = (newUser) => {
//     setUsers([...users, newUser]);
//   };

//   const handleUserDeleted = (id) => {
//     setUsers(users.filter(user => user._id !== id));
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//       padding: '40px 20px'
//     }}>
//       <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//         <h1 style={{
//           textAlign: 'center',
//           fontSize: '52px',
//           fontWeight: 'bold',
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           marginBottom: '16px'
//         }}>
//           👥 Sistema de Gestión de Usuarios
//         </h1>

//         <p style={{
//           textAlign: 'center',
//           fontSize: '18px',
//           color: '#666',
//           marginBottom: '40px'
//         }}>
//           Administra tu directorio de usuarios de forma fácil y eficiente
//         </p>

//         <UserForm onUserAdded={handleUserAdded} />
//         <UserList users={users} onUserDeleted={handleUserDeleted} />
//       </div>
//     </div>
//   );
// }

// export default App;