import React, { Component } from 'react';
import { connect } from 'dva';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

	// componentWillMount(){
		
	// } 

    render() {
		return (
            <h2>login</h2>
        )
    }
}

Login.propTypes = {
};


export default connect()(Login);