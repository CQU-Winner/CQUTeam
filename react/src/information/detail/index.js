import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import axios from 'axios';
import Loader from '../../shared/loader';
import { apiRoute } from '../../shared/consts';
import '../../shared/NavBar/TopNavBar.less';
import './index.less';

const detailUrl = `${apiRoute}compets/`;

export default class InfoDetails extends React.Component {
    state = {
        details: {},
    }

    async componentWillMount() {
        const url = detailUrl + this.props.match.params.id;
        const { status, data: rawData } = await axios.get(url);
        if (status >= 200 && status < 300 && rawData.status === 'ok') {
            this.setState({ details: rawData.data });
        } else {
            console.error(status, rawData && rawData.msg);
            this.setState({ details: { title: '出错啦😣 请重试' } });
        }
    }

    render() {
        const details = this.state.details;

        return (
            <div style={{ marginBottom: '60px' }}>
                <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => this.props.history.go(-1)}>
                    <div className="nav-bar-title">竞赛详情</div>
                </NavBar>
                {details.detail ? (
                    <article className="info-details">
                        <h1>{details.title}</h1>
                        <section className="summaries">
                            <p>浏览量：{details.visited}</p>
                            <p>竞赛类别：{details.category}</p>
                            <p>参赛对象：{details.audience}</p>
                            <p>参赛类型：{details.type}</p>
                            <p>报名：{details.entry_begin.split('T')[0]} 至 {details.entry_end.split('T')[0]}</p>
                            <p>比赛：{details.compet_begin.split('T')[0]} 至 {details.compet_end.split('T')[0]}</p>
                            <p>报名费：{details.fee}</p>
                            <p>级别：{details.level}</p>
                            <p>主办方：{details.organizer}</p>
                        </section>
                        <section
                            className="descriptions"
                            dangerouslySetInnerHTML={{ __html: new window.DOMParser().parseFromString(details.detail, 'text/html').documentElement.textContent }}
                        >
                        </section>
                    </article>
                ) : <Loader />
                }
            </div>
        );
    }
}
