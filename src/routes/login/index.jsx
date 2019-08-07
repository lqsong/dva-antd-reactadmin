/**
 * 登录页
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
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