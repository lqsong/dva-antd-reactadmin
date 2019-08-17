import React from 'react';
import { Link } from 'dva/router';

import { showChildRoutes } from '@/utils/core';

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const SubMenuItem = (itemList) => {    
   /*  let list = itemList['routes'].map((item) => {
            return (  
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <span>{item.meta.title}</span>
                        </Link>
                    </Menu.Item>
            );
    }); */
    let list = SideMenuItem(itemList['routes']);    
    let icon = itemList.icon ? <Icon type={itemList.icon} />: '';
    return (
        <SubMenu key={itemList.path} title={
            <span>
                { icon }
                <span>{itemList.meta.title}</span>
            </span>
            }>
            { list }
       </SubMenu> 
    );

};

const SideMenuItem = (itemList) => {    
    return itemList.map( (item) => {
        if (item.routes && item.routes.length === 1) { //只有 一个子菜单

            if (showChildRoutes(item)) { // 有子菜单 并且（有多个子菜单 或 显示下级）
                return SubMenuItem(item);
             } else {
                let icon = item.routes[0].icon ? <Icon type={item.routes[0].icon} />: '';
                 return (  
                     <Menu.Item key={item.routes[0].path}>
                         <Link to={item.routes[0].path}>
                             { icon }
                             <span>{item.routes[0].meta.title}</span>
                         </Link>
                     </Menu.Item>
                 );
             }
 
        } else { // 没有 或 多个子菜单
            
            if (showChildRoutes(item)) { // 有子菜单 并且（有多个子菜单 或 显示下级）
               return SubMenuItem(item);
            } else {
                let icon = item.icon ? <Icon type={item.icon} />: '';
                return ( 
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            { icon }
                            <span>{item.meta.title}</span>
                        </Link>
                    </Menu.Item>
                );
            }
        }
    })    
};

const SideMenu = ({ item, pathname }) => {
   
    if (!item) {
        return (<span></span>);
    }
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
            {
               SideMenuItem(item)
            }            
        </Menu>
    );
};

SideMenu.propTypes = {
}

export default SideMenu;