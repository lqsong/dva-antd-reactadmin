export default {

    namespace: 'products',

    state: {
        productTList: [
            { name: 'dva', id: 1 },
            { name: 'antd', id: 2 }
        ]
    },

    reducers: {
        'delete'(state, { payload: id }) {
            const pro = state.productTList.filter((item) => {
                return item.id !== id;
            });
           
            /* state.productTList = pro;

            return state; */
            return { productTList: pro }
        }
    }

}