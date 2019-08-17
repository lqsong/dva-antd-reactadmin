/**
 * 全局Model
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
export default {

    namespace: 'global',

    state: {
        pathname: '/base/home',
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({pathname}) => {
                dispatch({type: 'save', payload: { pathname }});
            })
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        setState(state, {payload}) {
            return Object.assign({}, state, {...payload});
        }
    },

}