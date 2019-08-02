import React from 'react';
import { connect } from 'dva';
import ProductsList from '../../components/ProductsList';

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

export default connect(({ products }) => ({ products: products.productTList }))(Products);