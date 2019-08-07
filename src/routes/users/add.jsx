/**
 * 用户添加
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
import React, { Component } from 'react';
import { connect } from 'dva';

class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

	// componentWillMount(){
		
	// } 

    render() {
		return (
            <h2>Add of Users</h2>
        )
    }
}

UserAdd.propTypes = {
};


export default connect()(UserAdd);