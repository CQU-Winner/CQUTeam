import React from 'react';
import { NavBar } from 'antd-mobile';
import '../../shared/NavBar/TopNavBar.less';

export default function (props) {
    return (
        <div>
            <NavBar mode="light">
                <div className="nav-bar-title">竞赛详情</div>
            </NavBar>
        </div>
    );
}
