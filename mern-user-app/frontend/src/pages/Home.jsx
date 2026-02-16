import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleUserAdded = (newUser) => {
        // Redirigir al directorio después de agregar
        navigate('/directorio');
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            padding: '40px 20px'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '52px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '16px'
                }}>
                    👥 Sistema de Gestión de Usuarios
                </h1>

                <p style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    color: '#666',
                    marginBottom: '40px'
                }}>
                    Administra tu directorio de usuarios de forma fácil y eficiente
                </p>

                {/* Botones de navegación */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    marginBottom: '40px'
                }}>
                    <button
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#667eea',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                        }}
                    >
                        ➕ Agregar Usuario
                    </button>

                    <button
                        onClick={() => navigate('/directorio')}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: 'white',
                            color: '#667eea',
                            border: '2px solid #667eea',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        📋 Ver Directorio
                    </button>
                </div>

                <UserForm onUserAdded={handleUserAdded} />
            </div>
        </div>
    );
}

export default Home;