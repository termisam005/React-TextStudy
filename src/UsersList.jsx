import React from 'react';


function UsersList({ users }) {

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}


function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    );
}

export default UsersList;