import React, { Component } from 'react';
import { connect } from 'dva';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

	// componentWillMount(){
		
	// } 

    render() {
		return (
            <h2>List of Users</h2>
        )
    }
}

UserList.propTypes = {
};


export default connect()(UserList);