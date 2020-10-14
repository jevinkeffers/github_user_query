import React from 'react';
import { Link } from 'react-router-dom'; 
import UserCard from './UserCard';

const UserCardList = (props) => {
    const { users } = props;
    return (
        <>
            <h1>User Card List</h1>

            {users.map((user, index) => {
                return (
                <div key={index}>
                <Link to={`/user/${user.login}`}>
                    <UserCard user={user}/>
                </Link>
                </div>)
            })}
            
        </>
    )
};

export default UserCardList