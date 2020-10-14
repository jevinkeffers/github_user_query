import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import UserCardList from './UserCardList';
import UserProfile from './UserProfile';

class SearchForm extends Component {
    state = {
        userName: "",
        users: []
    }

    _handleChange = newUserName => {
        this.setState({
            userName: newUserName
        })
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { userName } = this.state;
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const user = await response.json();
        this.setState({
            users: [...this.state.users, user]
        });
    }
    
    render () {
        return (
            <>
            <Route exact path="/">
                <h1>Search Form</h1>
                <form onSubmit={this._handleSubmit}>
                    <input 
                        type="text" 
                        onChange={event => this._handleChange(event.target.value)}
                    />
                    <button type="submit">Find User</button>
                </form>
                <UserCardList users={this.state.users}/>
            </Route>
            <Route path="/user/:username">
                <UserProfile users={this.state.users}/>
            </Route>
            </>
        )
    }
} 
export default SearchForm;