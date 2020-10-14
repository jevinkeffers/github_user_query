import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UserProfile = props => {
    const { users } = props;
    const [ repos, setRepos ] = useState([])
    const { username } = useParams();

    useEffect(() => {
        (async function() {
            const response = await fetch(`https://api.github.com/users/${username}/repos?page=1&per_page=200`);
            const repos = await response.json();
            setRepos(repos);
        })();
    }, [setRepos, username]);
    
    const user = users.find((user) => {
        return user.login === username ? user : null;
    })
    console.log(user);
    return (
        <>
        <Link to="/">Return to the search</Link>
        <h1>{user.name}</h1>
        <h3>{user.login}</h3>
        <ul>
        {repos.map(repo => {
        return (<li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>);      
    })}
        </ul>
        
        </>
    )
}
export default UserProfile;