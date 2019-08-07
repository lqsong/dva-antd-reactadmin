/**
 * 产品列表
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
import React from 'react';
import { connect } from 'dva';
import ProductsList from '@/routes/products/components/ProductsList';

const Products = ({ dispatch, products }) => {
    function handleDelete (id) {
        dispatch({
            type: 'products/delete',
            payload: id
        });
    }
    return (        
        <div>
            <h2>List of Prodeucts</h2>
            <ProductsList onDelete={handleDelete} products={products} />
        </div>
    );
};

/* function mapStateToProps({products}) {
    return { products: products.productTList };
} */

function mapStateToProps(state) {
    return { products: state.products.productTList };
}
export default connect(mapStateToProps)(Products);