import React, { useState } from "react";
import './index.css';
import { Breadcrumb, Input, Menu, Dropdown, Avatar, Image } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HomeOutlined,
    DownOutlined,
    BellOutlined
} from '@ant-design/icons';
import defaultHead from '../../assets/img/defaultHead.jpg';

export default function Head(props) {
    return (
        <>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: props.toggle,
            })}
            <Breadcrumb className='breadcrumb'>
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <UserOutlined />
                    <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
            <Input className='input' placeholder="关键词快速搜索" />
            <span className='menuTitle'>产品中心</span>
            <span className='menuTitle'>社区中心</span>
            <Dropdown overlay={moduleMenu} placement="bottomCenter">
                <a className="menuTitle" onClick={e => e.preventDefault()}>
                    <span className='dropdownLink'>个人中心</span>
                    <DownOutlined />
                </a>
            </Dropdown>
            <BellOutlined style={{ fontSize: '20px', margin: '0 1em' }} />
            <Avatar style={{marginLeft: '1em'}} size={36} src={defaultHead} />
            <Dropdown overlay={userMenu} placement="bottomLeft">
                <a onClick={e => e.preventDefault()}>
                    <span className='dropdownLink'>admin</span>
                    <DownOutlined />
                </a>
            </Dropdown>
        </>
    )
}

const moduleMenu = (
    <Menu>
        <Menu.Item className='center'>
            <span>个人中心</span>
        </Menu.Item>
        <Menu.Item className='center'>
            <span>资源管理</span>
        </Menu.Item>
    </Menu>
);

const userMenu = (
    <Menu>
        <Menu.Item className='center'>
            <span>返回首页</span>
        </Menu.Item>
        <Menu.Item className='center'>
            <span>退出登录</span>
        </Menu.Item>
    </Menu>
);