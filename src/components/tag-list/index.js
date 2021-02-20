import React from 'react';
import './index.css';
import { Tag, Menu, Dropdown, Button } from 'antd';
import { LeftOutlined, RightOutlined, CloseCircleOutlined, HeartFilled } from '@ant-design/icons';

function preventDefault(e) {
    e.preventDefault();
}
function contextmenu(e) {
    e.preventDefault();
    
}
export default function TagList(props) {
    return (
        <div className='tags-nav'>
            <Dropdown overlay={handleTag} placement="bottomCenter">
                <Button className='btn-con close-con' icon={<CloseCircleOutlined />} />
            </Dropdown>
            <Button className='btn-con left-btn' icon={<LeftOutlined />} />
            <Button className='btn-con right-btn' icon={<RightOutlined />} />
            <div className='scroll-outer'>
                <div className='scroll-body'>
                    <Tag 
                        icon={<HeartFilled style={{ color: '#08c' }} />} 
                        color='processing' closable 
                        onClose={preventDefault}
                        onContextMenu={contextmenu}
                    >哈哈哈哈</Tag>
                    <Tag 
                        icon={<HeartFilled style={{ color: '#e8eaec' }} />} 
                        color='default' closable 
                        onClose={preventDefault}
                        onContextMenu={contextmenu}
                    >哈哈哈哈</Tag>
                </div>
            </div>
        </div>
    );
}

const handleTag  = (
    <Menu>
        <Menu.Item className='center'>
            <span>关闭其他</span>
        </Menu.Item>
        <Menu.Item className='center'>
            <span>关闭所有</span>
        </Menu.Item>
    </Menu>
);