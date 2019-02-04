import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteUser,allUsers,update} from '../actions/action-user';
import {Redirect} from 'react-router-dom';
class UserList extends Component {
    state={
        targetUser:false,
    }
        componentDidMount =()=>{
            fetch('http://localhost:8000/getAllUsers')
            .then(res => res.json())
            .then(users =>{
                // console.log(users);
                this.props.dispatch(allUsers(users.data))
            })
            .catch(err => console.log(err));

        }

        deleteUser =(id)=>{
            let options = {
                method: 'DELETE',
                body:JSON.stringify({id:id}),
                headers: { 'Content-Type': 'application/json' }
            }
                fetch('http://localhost:8000/deleteUser',options)
                .then((res)=> res.json())
                .then((success)=>{
                    console.log('oky');
                    this.props.dispatch(deleteUser(id));
                })
                .catch((err)=>{console.log(err)});
            
        }
        updateTarget =(id)=>{
            let options = {
                method: 'PUT',
                body:JSON.stringify({id:id}),
                headers: { 'Content-Type': 'application/json'  }
            }
            fetch('http://localhost:8000/targetUpdate',options)
            .then((res)=> res.json())
            .then((user)=>{
                // console.log(user);
                localStorage.setItem('update',JSON.stringify(user.data));
                this.setState({targetUser:true})
            })
            .catch((err)=>{console.log(err)}); 
        
    }
    render(){

        let users = this.props.users;
       
        return(
        <div>
            {this.state.targetUser && (<Redirect to='/updateUser'/>)}
            {users.map((value,index)=>{
                   return (
                    <div key={value._id} className="card">
                        <div className="card-content">
                    <div >
                    <b>name : </b>{value.name}<br/>
                    <b>email: </b>{value.email}<br/>
                    <b>Balamce: </b>{value.balance}<br/>
                    </div>
                    <div className="button-right">
                        <button className="btn bule waves-effect waves-light" onClick={()=>{this.updateTarget(value._id)}} >update</button>
                        <button className="btn red waves-effect waves-light" onClick={()=>{this.deleteUser(value._id)}}>Delete</button>
                    </div>
                    </div>
                    </div>
                   )
            })}
        </div>
        )
    }
}

let mapStateToProps = (store)=>{
    return {
        users : store.users,
    }
}


export default connect(mapStateToProps) (UserList);