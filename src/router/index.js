import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Center from '../view/platform/center';

import Head from '../components/head';
import Menu from '../components/menu';
import TagList from '../components/tag-list';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

const Router = (props) => {
    const [theme, setTheme] = useState('dark');
    const [collapsed, setCollapsed] = useState(false);
    function toggle() {
        setCollapsed(!collapsed)
    }
    
    return (
        <BrowserRouter>
            <Layout>
                <Sider
                    collapsible 
                    collapsed={collapsed}
                    trigger={null}
                    className='customScroll'
                    style={{
                        height: '100vh',
                        background: theme==='dark' ? '#001529':'#fff'
                    }}
                >
                    <Menu theme={theme} collapsed={collapsed} />
                </Sider>
                <Layout>
                    <Header 
                        style={{
                            background: '#fff',
                            padding: '0'
                        }}
                    >
                        <Head collapsed={collapsed} toggle={toggle} />
                    </Header>
                    <Content className='content'>
                        <Layout>
                            <TagList />
                        </Layout>
                        <Content>
                            <Switch>
                                <Route path='/' component={Center}></Route>
                            </Switch>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}
export default Router;
