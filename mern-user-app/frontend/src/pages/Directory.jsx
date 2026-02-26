import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import { useNavigate } from 'react-router-dom';

function Directory() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const handleUserDeleted = (id) => {
        setUsers(users.filter(user => user._id !== id));
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'white',  // ← CAMBIO: de '#f8f9fa' a 'white'
            padding: 'clamp(12px, 3vw, 20px)'
        }}>
            <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 clamp(8px, 2vw, 20px)' }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: 'clamp(20px, 5vw, 40px)',
                    padding: 'clamp(12px, 3vw, 20px) 0'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(24px, 6vw, 48px)',
                        fontWeight: 'bold',
                        color: '#1a73e8',
                        marginBottom: '8px',
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        📋 Directorio de Usuarios
                    </h1>

                    <p style={{
                        fontSize: 'clamp(13px, 3vw, 16px)',
                        color: '#5f6368',
                        margin: '8px 0 clamp(16px, 4vw, 24px) 0',
                        padding: '0 12px'
                    }}>
                        Explora todos los usuarios registrados
                    </p>

                    {/* Botones de navegación */}
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        padding: '0 12px'
                    }}>
                        <button
                            onClick={() => navigate('/')}
                            style={{
                                padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 24px)',
                                backgroundColor: 'white',
                                color: '#1a73e8',
                                border: '2px solid #1a73e8',
                                borderRadius: '8px',
                                fontSize: 'clamp(13px, 2.5vw, 15px)',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                touchAction: 'manipulation',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#1a73e8';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.color = '#1a73e8';
                            }}
                        >
                            ➕ Agregar Usuario
                        </button>

                        <button
                            style={{
                                padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 24px)',
                                backgroundColor: '#1a73e8',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: 'clamp(13px, 2.5vw, 15px)',
                                fontWeight: '600',
                                cursor: 'pointer',
                                boxShadow: '0 2px 8px rgba(26, 115, 232, 0.3)',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            📋 Ver Directorio
                        </button>
                    </div>
                </div>

                <UserList users={users} onUserDeleted={handleUserDeleted} />
            </div>
        </div>
    );
}

export default Directory;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserList from '../components/UserList';
// import { useNavigate } from 'react-router-dom';

// function Directory() {
//     const [users, setUsers] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:5001/api/users');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error al obtener usuarios:', error);
//         }
//     };

//     const handleUserDeleted = (id) => {
//         setUsers(users.filter(user => user._id !== id));
//     };

//     return (
//         <div style={{
//             minHeight: '100vh',
//             background: '#f8f9fa',
//             padding: 'clamp(12px, 3vw, 20px)'
//         }}>
//             <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 clamp(8px, 2vw, 20px)' }}>
//                 {/* Header */}
//                 <div style={{
//                     textAlign: 'center',
//                     marginBottom: 'clamp(20px, 5vw, 40px)',
//                     padding: 'clamp(12px, 3vw, 20px) 0'
//                 }}>
//                     <h1 style={{
//                         fontSize: 'clamp(24px, 6vw, 48px)',
//                         fontWeight: 'bold',
//                         color: '#1a73e8',
//                         marginBottom: '8px',
//                         margin: 0,
//                         lineHeight: '1.2'
//                     }}>
//                         📋 Directorio de Usuarios
//                     </h1>

//                     <p style={{
//                         fontSize: 'clamp(13px, 3vw, 16px)',
//                         color: '#5f6368',
//                         margin: '8px 0 clamp(16px, 4vw, 24px) 0',
//                         padding: '0 12px'
//                     }}>
//                         Explora todos los usuarios registrados
//                     </p>

//                     {/* Botones de navegación */}
//                     <div style={{
//                         display: 'flex',
//                         gap: '10px',
//                         justifyContent: 'center',
//                         flexWrap: 'wrap',
//                         padding: '0 12px'
//                     }}>
//                         <button
//                             onClick={() => navigate('/')}
//                             style={{
//                                 padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 24px)',
//                                 backgroundColor: 'white',
//                                 color: '#1a73e8',
//                                 border: '2px solid #1a73e8',
//                                 borderRadius: '8px',
//                                 fontSize: 'clamp(13px, 2.5vw, 15px)',
//                                 fontWeight: '600',
//                                 cursor: 'pointer',
//                                 transition: 'all 0.3s ease',
//                                 touchAction: 'manipulation',
//                                 whiteSpace: 'nowrap'
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.currentTarget.style.backgroundColor = '#1a73e8';
//                                 e.currentTarget.style.color = 'white';
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.currentTarget.style.backgroundColor = 'white';
//                                 e.currentTarget.style.color = '#1a73e8';
//                             }}
//                         >
//                             ➕ Agregar Usuario
//                         </button>

//                         <button
//                             style={{
//                                 padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 24px)',
//                                 backgroundColor: '#1a73e8',
//                                 color: 'white',
//                                 border: 'none',
//                                 borderRadius: '8px',
//                                 fontSize: 'clamp(13px, 2.5vw, 15px)',
//                                 fontWeight: '600',
//                                 cursor: 'pointer',
//                                 boxShadow: '0 2px 8px rgba(26, 115, 232, 0.3)',
//                                 whiteSpace: 'nowrap'
//                             }}
//                         >
//                             📋 Ver Directorio
//                         </button>
//                     </div>
//                 </div>

//                 <UserList users={users} onUserDeleted={handleUserDeleted} />
//             </div>
//         </div>
//     );
// }

// export default Directory;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserList from '../components/UserList';
// import { useNavigate } from 'react-router-dom';

// function Directory() {
//     const [users, setUsers] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:5001/api/users');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error al obtener usuarios:', error);
//         }
//     };

//     const handleUserDeleted = (id) => {
//         setUsers(users.filter(user => user._id !== id));
//     };

//     return (
//         <div style={{
//             minHeight: '100vh',
//             background: '#f8f9fa',
//             padding: '20px'
//         }}>
//             <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 20px' }}>
//                 {/* Header */}
//                 <div style={{
//                     textAlign: 'center',
//                     marginBottom: '40px',
//                     padding: '20px 0'
//                 }}>
//                     <h1 style={{
//                         fontSize: 'clamp(32px, 5vw, 52px)',
//                         fontWeight: 'bold',
//                         color: '#1a73e8',
//                         marginBottom: '12px',
//                         margin: 0
//                     }}>
//                         📋 Directorio de Usuarios
//                     </h1>

//                     <p style={{
//                         fontSize: 'clamp(14px, 2vw, 18px)',
//                         color: '#5f6368',
//                         margin: '12px 0 24px 0'
//                     }}>
//                         Explora todos los usuarios registrados
//                     </p>

//                     {/* Botones de navegación */}
//                     <div style={{
//                         display: 'flex',
//                         gap: '12px',
//                         justifyContent: 'center',
//                         flexWrap: 'wrap'
//                     }}>
//                         <button
//                             onClick={() => navigate('/')}
//                             style={{
//                                 padding: '12px 24px',
//                                 backgroundColor: 'white',
//                                 color: '#1a73e8',
//                                 border: '2px solid #1a73e8',
//                                 borderRadius: '8px',
//                                 fontSize: 'clamp(14px, 2vw, 16px)',
//                                 fontWeight: '600',
//                                 cursor: 'pointer',
//                                 transition: 'all 0.3s ease'
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.currentTarget.style.backgroundColor = '#1a73e8';
//                                 e.currentTarget.style.color = 'white';
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.currentTarget.style.backgroundColor = 'white';
//                                 e.currentTarget.style.color = '#1a73e8';
//                             }}
//                         >
//                             ➕ Agregar Usuario
//                         </button>

//                         <button
//                             style={{
//                                 padding: '12px 24px',
//                                 backgroundColor: '#1a73e8',
//                                 color: 'white',
//                                 border: 'none',
//                                 borderRadius: '8px',
//                                 fontSize: 'clamp(14px, 2vw, 16px)',
//                                 fontWeight: '600',
//                                 cursor: 'pointer',
//                                 boxShadow: '0 2px 8px rgba(26, 115, 232, 0.3)'
//                             }}
//                         >
//                             📋 Ver Directorio
//                         </button>
//                     </div>
//                 </div>

//                 <UserList users={users} onUserDeleted={handleUserDeleted} />
//             </div>
//         </div>
//     );
// }

// export default Directory;
