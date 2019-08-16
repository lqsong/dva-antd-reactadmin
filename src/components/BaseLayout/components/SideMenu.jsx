import React from 'react';
import { Link } from 'dva/router';

import { showChildRoutes } from '@/utils/core';

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const SubMenuItem = (itemList) => {    
    let list = itemList['routes'].map((item) => {
            return (  
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <span>{item.meta.title}</span>
                        </Link>
                    </Menu.Item>
            );
    });

    return (
        <SubMenu key={itemList.path} title={
            <span>
                <Icon type={itemList.icon} />
                <span>{itemList.meta.title}</span>
            </span>
            }>
         {
             list
         }
       </SubMenu> 
)

};

const SideMenuItem = (itemList) => {
    
    return itemList.map( (item) => {
        if (item.routes && item.routes.length === 1) { //只有 一个子菜单

            if (showChildRoutes(item)) { // 有子菜单 并且（有多个子菜单 或 显示下级）
                return SubMenuItem(item);
             } else {
                 return (  
                     <Menu.Item key={item.routes[0].path}>
                         <Link to={item.routes[0].path}>
                             <Icon type={item.routes[0].icon} />
                             <span>{item.routes[0].meta.title}</span>
                         </Link>
                     </Menu.Item>
                 );
             }
 
        } else { // 没有 或 多个子菜单
            
            if (showChildRoutes(item)) { // 有子菜单 并且（有多个子菜单 或 显示下级）
               return SubMenuItem(item);
            } else {
                return (  
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <Icon type={item.icon} />
                            <span>{item.meta.title}</span>
                        </Link>
                    </Menu.Item>
                );
            }
    }
    })    
};

const SideMenu = ({ item }) => {
   
    if (!item) {
        return (<span></span>);
    }
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
               SideMenuItem(item)
            }            
        </Menu>
    );
};

SideMenu.propTypes = {
}

export default SideMenu;