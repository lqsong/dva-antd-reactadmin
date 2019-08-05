import React from 'react';
import { connect } from 'dva';

const Page404 = () => {
    return (
        <h2>404</h2>
    );
};

export default connect()(Page404);