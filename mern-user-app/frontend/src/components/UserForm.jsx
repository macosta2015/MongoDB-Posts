import React, { useState } from 'react';
import axios from 'axios';

function UserForm({ onUserAdded }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dni: '',
        telefono: '',
        descripcion: '',
        ciudad: '',
        modalidad: 'Online'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos a enviar:', formData);
        try {
            const response = await axios.post('http://localhost:5001/api/users', formData);
            alert('¡Usuario agregado exitosamente!');
            setFormData({
                name: '',
                email: '',
                dni: '',
                telefono: '',
                descripcion: '',
                ciudad: '',
                modalidad: 'Online'
            });
            onUserAdded(response.data);
        } catch (error) {
            alert('Error al agregar usuario: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div style={{
            padding: '30px',
            background: 'white',
            borderRadius: '16px',
            marginBottom: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{
                marginTop: 0,
                marginBottom: '24px',
                color: '#333',
                fontSize: '24px'
            }}>
                ➕ Agregar Nuevo Usuario
            </h2>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {/* Nombre */}
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#555'
                        }}>
                            Nombre Completo *
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ej: Juan Pérez"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '12px',
                                width: '100%',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '14px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#555'
                        }}>
                            Correo Electrónico *
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '12px',
                                width: '100%',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '14px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* DNI */}
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#555'
                        }}>
                            DNI *
                        </label>
                        <input
                            type="text"
                            name="dni"
                            placeholder="Ej: 12345678"
                            value={formData.dni}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '12px',
                                width: '100%',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '14px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* Teléfono/WhatsApp */}
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#555'
                        }}>
                            Teléfono/WhatsApp *
                        </label>
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Ej: +52 55 1234 5678"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '12px',
                                width: '100%',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '14px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* Ciudad */}
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#555'
                        }}>
                            Ciudad *
                        </label>
                        <input
                            type="text"
                            name="ciudad"
                            placeholder="Ej: Ciudad de México"
                            value={formData.ciudad}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '12px',
                                width: '100%',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '14px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* Modalidad */}
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#555'
                        }}>
                            Modalidad *
                        </label>
                        <select
                            name="modalidad"
                            value={formData.modalidad}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '12px',
                                width: '100%',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '14px',
                                boxSizing: 'border-box',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="Online">🌐 Online</option>
                            <option value="Presencial">🏢 Presencial</option>
                            <option value="Híbrido">🔄 Híbrido</option>
                        </select>
                    </div>
                </div>

                {/* Descripción - Campo grande */}
                <div style={{ marginBottom: '10px', marginTop: '10px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#555'
                    }}>
                        Descripción *
                    </label>
                    <textarea
                        name="descripcion"
                        placeholder="Describe tu experiencia, especialidades o servicios..."
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                        rows="4"
                        style={{
                            padding: '12px',
                            width: '100%',
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        marginTop: '20px',
                        padding: '14px 32px',
                        backgroundColor: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        width: '100%',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5568d3'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
                >
                    ✅ Agregar Usuario
                </button>
            </form>
        </div>
    );
}

export default UserForm;