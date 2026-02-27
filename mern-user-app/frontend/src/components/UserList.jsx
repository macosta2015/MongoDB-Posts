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
            case 'Online': return '#34A853';
            case 'Presencial': return '#1a73e8';
            case 'Híbrido': return '#12c2e9';
            default: return '#9E9E9E';
        }
    };

    return (
        <div style={{ width: '100%', padding: '0 8px' }}>
            {users.length === 0 ? (
                <p style={{
                    textAlign: 'center',
                    color: '#5f6368',
                    padding: 'clamp(40px, 8vw, 60px) 20px',
                    background: 'white',
                    borderRadius: '12px',
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    maxWidth: '600px',
                    margin: '0 auto',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    No hay usuarios registrados. ¡Agrega tu primer usuario!
                </p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: 'clamp(16px, 2vw, 24px)',
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 12px',
                    justifyContent: 'center'
                }}>
                    {users.map((user, index) => (
                        <div key={user._id} style={{
                            background: 'linear-gradient(135deg, #1a73e8 0%, #12c2e9 100%)',
                            borderRadius: '12px',
                            padding: '20px',
                            boxShadow: '0 2px 8px rgba(26, 115, 232, 0.2)',
                            position: 'relative',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(26, 115, 232, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(26, 115, 232, 0.2)';
                            }}
                        >
                            {/* Número de tarjeta */}
                            <div style={{
                                position: 'absolute',
                                top: '12px',
                                left: '12px',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.25)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                {index + 1}
                            </div>

                            {/* Badge Verificado */}
                            <div style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                background: '#34A853',
                                padding: '4px 10px',
                                borderRadius: '12px',
                                fontSize: '11px',
                                fontWeight: '600',
                                color: 'white'
                            }}>
                                ✓ Verificado
                            </div>

                            {/* Foto de perfil (inicial) */}
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: 'white',
                                margin: '35px auto 16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '44px',
                                fontWeight: 'bold',
                                color: '#1a73e8',
                                border: '4px solid rgba(255,255,255,0.4)',
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
                                gap: '8px'
                            }}>
                                <h3 style={{
                                    margin: '0',
                                    fontSize: 'clamp(18px, 4vw, 22px)',
                                    fontWeight: 'bold',
                                    wordBreak: 'break-word',
                                    lineHeight: '1.2'
                                }}>
                                    {user.name}
                                </h3>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                    fontSize: 'clamp(11px, 2.5vw, 13px)',
                                    opacity: '0.95'
                                }}>
                                    <p style={{ margin: '0', wordBreak: 'break-word' }}>
                                        📧 {user.email}
                                    </p>

                                    <p style={{ margin: '0' }}>
                                        💳 DNI: {user.dni}
                                    </p>

                                    <p style={{ margin: '0' }}>
                                        📱 {user.telefono}
                                    </p>

                                    <p style={{
                                        margin: '0',
                                        fontSize: 'clamp(13px, 3vw, 15px)',
                                        fontWeight: '600'
                                    }}>
                                        📍 {user.ciudad}
                                    </p>
                                </div>

                                {/* Descripción */}
                                <p style={{
                                    margin: '8px 0',
                                    opacity: '0.9',
                                    fontSize: 'clamp(11px, 2.5vw, 12px)',
                                    lineHeight: '1.4',
                                    fontStyle: 'italic',
                                    padding: '0 8px',
                                    maxHeight: '50px',
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
                                    padding: '6px 14px',
                                    borderRadius: '16px',
                                    margin: '8px auto',
                                    fontSize: 'clamp(12px, 2.5vw, 14px)',
                                    fontWeight: '600',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {getModalidadIcon(user.modalidad)} {user.modalidad}
                                </div>

                                {/* Calificación */}
                                <div style={{ margin: '8px 0' }}>
                                    <span style={{ color: '#FFC107', fontSize: 'clamp(14px, 3vw, 18px)' }}>★★★★★</span>
                                    <span style={{ marginLeft: '6px', fontSize: 'clamp(11px, 2.5vw, 13px)', fontWeight: '600' }}>5/5</span>
                                </div>

                                {/* Botón eliminar */}
                                <button
                                    onClick={() => handleDelete(user._id)}
                                    style={{
                                        marginTop: '12px',
                                        padding: '10px 20px',
                                        backgroundColor: '#EA4335',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontSize: 'clamp(12px, 2.5vw, 14px)',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        width: '100%',
                                        touchAction: 'manipulation'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#d33426';
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#EA4335';
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