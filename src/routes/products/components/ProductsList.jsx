import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductsList = ({ onDelete, products }) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Actions',
            render: (text, record) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={ () => onDelete(record.id) }>
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            }
        }
    ];

    return (
        <Table
          rowKey = 'id'
          dataSource = {products}
          columns = {columns}
        />
    );
};

ProductsList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

export default ProductsList;
