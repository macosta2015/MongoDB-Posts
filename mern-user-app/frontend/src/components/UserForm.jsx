import React, { useState } from 'react';
import axios from 'axios';

function UserForm({ onUserAdded }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/users', formData);
            alert('User added successfully!');
            setFormData({ name: '', email: '', age: '' });
            onUserAdded(response.data);
        } catch (error) {
            alert('Error adding user: ' + error.response.data.message);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ padding: '8px', width: '100%', marginBottom: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ padding: '8px', width: '100%', marginBottom: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        style={{ padding: '8px', width: '100%', marginBottom: '5px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Add User
                </button>
            </form>
        </div>
    );
}

export default UserForm;