import React from 'react';
import axios from 'axios';

function UserList({ users, onUserDeleted }) {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/users/${id}`);
            alert('User deleted successfully!');
            onUserDeleted(id);
        } catch (error) {
            alert('Error deleting user');
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>User List</h2>
            {users.length === 0 ? (
                <p>No users found. Add some users!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {users.map(user => (
                        <li key={user._id} style={{ padding: '10px', border: '1px solid #eee', marginBottom: '10px', borderRadius: '4px' }}>
                            <strong>{user.name}</strong> - {user.email} - Age: {user.age}
                            <button
                                onClick={() => handleDelete(user._id)}
                                style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;