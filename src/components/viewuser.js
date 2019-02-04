import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import UsersList from "./usersList";
import {searchUsers} from "../actions/action-user";
class  Viewuser extends Component {
    state={
        isSearch:false,
        searchValue:null,
    }
    searchUser = (e)=>{
        e.preventDefault();
        let search = this.refs.search.value; 
        if(search === ""){
            return ;
        } 
        fetch(`http://localhost:8000/search/${search}`)
        .then(res => res.json())
        .then(users =>{
            // console.log(users);
            this.props.dispatch(searchUsers(users.data))
        })
        .catch(err => console.log(err));
    }
    render(){
        return(
        <div className="container">
         {/* {this.state.isSearch && (<Redirect to={`/search/${this.state.searchValue}`} />)} */}
        <form onSubmit={this.searchUser} method="GET">
            <input type="search" name="name"  ref="search" placeholder="search"/>
            <input className='btn' type='submit' value="search"/>
        </form>
        <br/>
        <UsersList/>
        </div>
        )
    }
}

export default connect() (Viewuser);