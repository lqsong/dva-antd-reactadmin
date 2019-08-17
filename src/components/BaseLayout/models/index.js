import routes from '@/routes/index';
import { getMenuByRouterLayout } from '@/utils/core';
export default {

    namespace: 'baselayout',

    state: {
        routeslist: routes(),
        menulist: null
    },

    reducers: {
        getMenu (state, action) {
            if ( !state.menulist ) {
                state.menulist = getMenuByRouterLayout(state.routeslist, '/base', ['admin']);
            }           
            return { ...state };
        }
    },

    subscriptions: {
    }

}