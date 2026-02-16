import React from 'react';
import axios from 'axios';

function UserList({ users, onUserDeleted }) {
    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            try {
                await axios.delete(`http://localhost:5001/api/users/${id}`);
                onUserDeleted(id);
            } catch (error) {
                alert('Error al eliminar usuario');
            }
        }
    };

    const getModalidadIcon = (modalidad) => {
        switch (modalidad) {
            case 'Online': return '🌐';
            case 'Presencial': return '🏢';
            case 'Híbrido': return '🔄';
            default: return '📍';
        }
    };

    const getModalidadColor = (modalidad) => {
        switch (modalidad) {
            case 'Online': return '#4CAF50';
            case 'Presencial': return '#2196F3';
            case 'Híbrido': return '#FF9800';
            default: return '#9E9E9E';
        }
    };

    return (
        <div style={{ width: '100%' }}>
            {users.length === 0 ? (
                <p style={{
                    textAlign: 'center',
                    color: '#666',
                    padding: '60px 20px',
                    background: 'white',
                    borderRadius: '16px',
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    No hay usuarios registrados. ¡Agrega tu primer usuario!
                </p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                    gap: 'clamp(16px, 2vw, 24px)',
                    width: '100%'
                }}>
                    {users.map((user, index) => (
                        <div key={user._id} style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '16px',
                            padding: 'clamp(20px, 3vw, 28px)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            position: 'relative',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            minHeight: '400px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.25)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                            }}
                        >
                            {/* Número de tarjeta */}
                            <div style={{
                                position: 'absolute',
                                top: '16px',
                                left: '16px',
                                width: 'clamp(35px, 5vw, 45px)',
                                height: 'clamp(35px, 5vw, 45px)',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 'clamp(16px, 2vw, 20px)',
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                {index + 1}
                            </div>

                            {/* Badge Verificado */}
                            <div style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: '#ffd700',
                                padding: '4px 12px',
                                borderRadius: '12px',
                                fontSize: 'clamp(10px, 1.5vw, 12px)',
                                fontWeight: 'bold',
                                color: '#333'
                            }}>
                                ✓ Verificado
                            </div>

                            {/* Foto de perfil (inicial) */}
                            <div style={{
                                width: 'clamp(80px, 15vw, 120px)',
                                height: 'clamp(80px, 15vw, 120px)',
                                borderRadius: '50%',
                                background: 'white',
                                margin: '40px auto 16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 'clamp(32px, 6vw, 52px)',
                                fontWeight: 'bold',
                                color: '#667eea',
                                border: '4px solid rgba(255,255,255,0.5)',
                                flexShrink: 0
                            }}>
                                {user.name.charAt(0).toUpperCase()}
                            </div>

                            {/* Información del usuario */}
                            <div style={{
                                textAlign: 'center',
                                color: 'white',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <h3 style={{
                                        margin: '0 0 8px 0',
                                        fontSize: 'clamp(20px, 3vw, 26px)',
                                        fontWeight: 'bold',
                                        wordBreak: 'break-word'
                                    }}>
                                        {user.name}
                                    </h3>

                                    <p style={{
                                        margin: '0 0 6px 0',
                                        opacity: '0.95',
                                        fontSize: 'clamp(12px, 1.8vw, 14px)',
                                        wordBreak: 'break-word'
                                    }}>
                                        📧 {user.email}
                                    </p>

                                    <p style={{
                                        margin: '0 0 6px 0',
                                        opacity: '0.95',
                                        fontSize: 'clamp(12px, 1.8vw, 14px)'
                                    }}>
                                        💳 DNI: {user.dni}
                                    </p>

                                    <p style={{
                                        margin: '0 0 12px 0',
                                        opacity: '0.95',
                                        fontSize: 'clamp(12px, 1.8vw, 14px)'
                                    }}>
                                        📱 {user.telefono}
                                    </p>

                                    <p style={{
                                        margin: '0 0 12px 0',
                                        opacity: '0.95',
                                        fontSize: 'clamp(14px, 2vw, 16px)',
                                        fontWeight: '600'
                                    }}>
                                        📍 {user.ciudad}
                                    </p>

                                    {/* Descripción */}
                                    <p style={{
                                        margin: '12px 0',
                                        opacity: '0.9',
                                        fontSize: 'clamp(11px, 1.6vw, 13px)',
                                        lineHeight: '1.5',
                                        fontStyle: 'italic',
                                        padding: '0 10px',
                                        maxHeight: '60px',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical'
                                    }}>
                                        "{user.descripcion}"
                                    </p>

                                    {/* Badge de Modalidad */}
                                    <div style={{
                                        display: 'inline-block',
                                        background: getModalidadColor(user.modalidad),
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        margin: '12px 0',
                                        fontSize: 'clamp(12px, 1.8vw, 15px)',
                                        fontWeight: 'bold'
                                    }}>
                                        {getModalidadIcon(user.modalidad)} {user.modalidad}
                                    </div>

                                    {/* Calificación */}
                                    <div style={{ margin: '12px 0' }}>
                                        <span style={{ color: '#ffd700', fontSize: 'clamp(16px, 2.5vw, 20px)' }}>★★★★★</span>
                                        <span style={{ marginLeft: '8px', fontSize: 'clamp(12px, 1.8vw, 15px)', fontWeight: '600' }}>5/5</span>
                                    </div>
                                </div>

                                {/* Botón eliminar */}
                                <button
                                    onClick={() => handleDelete(user._id)}
                                    style={{
                                        marginTop: '16px',
                                        padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 3vw, 28px)',
                                        backgroundColor: 'rgba(220, 53, 69, 0.9)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        fontSize: 'clamp(12px, 1.8vw, 14px)',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s ease',
                                        width: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#dc3545';
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(220, 53, 69, 0.9)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    🗑️ Eliminar Usuario
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserList;