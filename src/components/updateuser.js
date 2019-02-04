import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class UpdateUser extends Component {
    state={
        id:'',
        name:'',
        email:'',
        balance:'',
        setUpdate: false,
    }
   componentDidMount=()=>{
       let user =localStorage.getItem('update');
       user = JSON.parse(user);
       this.setState({name:user.name})
       this.setState({email:user.email})
       this.setState({balance:user.balance})
       this.setState({id:user._id})
       localStorage.removeItem('update');
   }
   
    updateUser=(e)=>{
        e.preventDefault();
        let name=this.refs.name.value;
        let email=this.refs.email.value;
        let balance=this.refs.balance.value;
        let user={id:this.state.id,name:name,email:email,balance:balance};
        let options = {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        }
            fetch('http://localhost:8000/updateUser',options)
            .then((res)=> res.json())
            .then((json)=>{
                this.setState({ setUpdate: true});
            })
                        .catch((err)=>console.log(err));
        
    }
    render(){
        let user = '';
        return(
        <div className="container">
        {this.state.setUpdate && (<Redirect to='/'/>)}
            <div className='section'></div>
            <form onSubmit={this.updateUser}>
                <input type="text" placeholder='name' ref='name' defaultValue={this.state.name}/>
                <input type="email" placeholder='Email' ref ='email' defaultValue={this.state.email}/>
                <input type="number" placeholder='Balance' ref ='balance' defaultValue={this.state.balance}/>
                <input type="submit" className="btn" value='update'/>
            </form>
        
                    </div>
                
        )
    }
}
export default connect()(UpdateUser);