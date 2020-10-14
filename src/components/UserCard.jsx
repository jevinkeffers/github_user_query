import React from 'react';
import './UserCard.css';

const UserCard = (props) => {
    const { user } = props;
    return (
        <div>
            <img src={user.avatar_url} alt={user.name} />
            <p>{user.name}</p>
        </div>
    )
}

export default UserCard;