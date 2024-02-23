import React, { useState, useEffect } from 'react';

export default function ManageAccount() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the Spring API
    fetch("http://localhost:8080/getAllUsers")
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

 // console.log(user.uid);
  const deleteUser = (userId) => {
    fetch(`/deleteUser/${userId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      // Update users state after successful deletion
      setUsers(users.filter(user => user.uid !== userId));
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Accounts</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Role ID</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.uname}</td>
              <td>{user.pwd}</td>
              <td>{user.role_id.role_id}</td> {/* Modify this line */}
              <td>
                {user.role_id.role_id === 1 && <span>Admin</span>}
                {user.role_id.role_id === 2 && <span>Student</span>}
                {user.role_id.role_id === 3 && <span>Subscribed Student</span>}
                {user.role_id.role_id === 4 && <span>Expert</span>}
              </td>
              <td>
                <button className="btn btn-danger ml-2" onClick={() => deleteUser(user.uid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
