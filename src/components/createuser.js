import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import AddUsers from './addUsers';
class UsersAdd extends Component {

    render(){
        return(
            <div>
                <div className="section"></div>
           <div className='container'>
            <Link to='/adduser/addUsers' className='btn'>Add users</Link>
            <Route path='/adduser/addUsers' component={AddUsers} />
         </div>
         </div>
            
        )
    }
}

export default UsersAdd;