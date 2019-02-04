import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
class AddUsers extends Component {
    state ={
        userSet:false,
    }
addUser=(e)=>{
    e.preventDefault();
    let name=this.refs.name.value;
    let email=this.refs.email.value;
    let balance=this.refs.balance.value;
    let user={name:name,email:email,balance:balance};
    let options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    }
        fetch('http://localhost:8000/addUser',options)
        .then((res)=> res.json())
        .then((json)=>{
            this.setState({userSet:true});
        })
        .catch((err)=>console.log(err));
    
}
    render(){
        return(
        <div>
            {this.state.userSet && (<Redirect to='/'/>)}
            <div className='section'></div>
            <form onSubmit={this.addUser}>
                <input type="text" placeholder='name' ref='name'/>
                <input type="email" placeholder='Email' ref ='email'/>
                <input type="number" placeholder='Balance' ref ='balance'/>
                <input type="submit" className="btn" value='add'/>
            </form>
        </div>
        )
    }
}

export default connect() (AddUsers);