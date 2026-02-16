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
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            padding: '20px'
        }}>
            <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 20px' }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    padding: '20px 0'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(32px, 5vw, 52px)',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '12px',
                        margin: 0
                    }}>
                        📋 Directorio de Usuarios
                    </h1>

                    <p style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        color: '#666',
                        margin: '12px 0 24px 0'
                    }}>
                        Explora todos los usuarios registrados
                    </p>

                    {/* Botones de navegación */}
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <button
                            onClick={() => navigate('/')}
                            style={{
                                padding: '12px 24px',
                                backgroundColor: 'white',
                                color: '#667eea',
                                border: '2px solid #667eea',
                                borderRadius: '8px',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#667eea';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.color = '#667eea';
                            }}
                        >
                            ➕ Agregar Usuario
                        </button>

                        <button
                            style={{
                                padding: '12px 24px',
                                backgroundColor: '#667eea',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
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