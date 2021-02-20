import React, { useState } from "react";
import './index.css';
import { Menu } from 'antd';
import { 
    MailOutlined, 
    UserOutlined
} from '@ant-design/icons';
import logoMaxDark from '../../assets/img/logo-max-dark.png';
import logoMaxLight from '../../assets/img/logo-max-light.png';
import logoMin from '../../assets/img/logo-min.png';

const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const Side = (props) => {
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    
    return (
        <>
            <div className="logo-con">
                {
                    props.collapsed ? 
                    <img src={logoMin} style={{width: 'auto', height: '48px'}} /> :
                    <img src={props.theme==='dark' ? logoMaxLight: logoMaxDark} />
                }
            </div>
            <Menu theme={props.theme} mode="inline"  openKeys={openKeys} onOpenChange={onOpenChange}>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="1" icon={<UserOutlined />}>Option 1</Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>Option 2</Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>Option 3</Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<MailOutlined />} title="Navigation Two">
                    <Menu.Item key="5" icon={<UserOutlined />}>Option 5</Menu.Item>
                    <Menu.Item key="6" icon={<UserOutlined />}>Option 6</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<MailOutlined />} title="Navigation Two">
                    <Menu.Item key="7" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="8" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="9" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="10" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="11" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="12" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="13" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="14" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="15" icon={<UserOutlined />}>Option 6</Menu.Item>
                    <Menu.Item key="16" icon={<UserOutlined />}>Option 6</Menu.Item>
                </SubMenu>
            </Menu>
        </>
    );
};

export default Side;