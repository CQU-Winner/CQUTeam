import React from 'react';
import * as queryString from 'querystring';
import { SearchBar, List, Flex, Picker } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import NavBar from '../shared/NavBar/TopNavBar';
import { InfomationStore } from './stores';
import RadioBar from './components/RadioBar';
import Pagination from '../shared/Pagination/Pagination.js';
import { competTypes } from '../shared/consts';
import Loader from '../shared/loader';
import '../shared/NavBar/TopNavBar.less';
import './index.less';

/** @type {InfomationStore} */
let store;

@observer
export default class Information extends React.Component {
    constructor() {
        super();
        store = store || new InfomationStore(this.setQueryString);
    }

    componentDidMount() {
        store.refresh();
    }
    
    setQueryString = (queryObj) => {
        const url = window.document.createElement('a');
        url.href = window.location;
        url.search = queryObj ? `?${queryString.stringify(queryObj)}` : '';
        console.log(url.pathname + url.search + url.hash);
        this.props.history.replace(url.pathname + url.search + url.hash);
    }
    
    componentWillReact() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="info-container">
                <NavBar title="竞赛资讯" />
                <SearchBar
                    placeholder="搜索竞赛"
                    defaultValue={store.wd}
                    onSubmit={v => store.wd = v}
                    onClear={() => store.wd = ''}
                />
                <Flex className="info-filter">
                    <RadioBar
                        style={{ flex: 1 }}
                        radios={[{
                            value: 'entry',
                            icon: <i className="zmdi zmdi-timer"></i>,
                            label: '最近开展',
                        }, {
                            value: 'hot',
                            icon: <i className="zmdi zmdi-fire"></i>,
                            label: '最多关注',
                        }, {
                            value: 'late',
                            icon: <i className="zmdi zmdi-time"></i>,
                            label: '最近更新',
                        }]}
                        value={store.sort}
                        onChange={v => store.sort = v}
                    />
                    <Picker
                        cols="2"
                        data={competTypes}
                        value={store.filter}
                        title="比赛类型"
                        onOk={v => store.filter = v}
                    >
                        <button
                            className={`${store.filter[0] !== '' && 'highlighted'} zmdi zmdi-apps filter-btn`}
                        >
                        </button>
                    </Picker>
                </Flex>
                <List className="info-list">
                    {store.loadFailed || store.isRefreshing ?
                        <List.Item onClick={store.loadFailed && store.refresh()}>
                            <div style={{ textAlign: 'center', lineHeight: '100px' }}>
                                {store.loadFailed ? '出错了😣 请点击重试' : <Loader />}
                            </div>
                        </List.Item>
                    : store.compets.map(item => (
                        <List.Item key={item.id} wrap multipleLine>
                            <Link key={item.id} to={`/information/${item.id}`}>
                                {item.title}
                                <List.Item.Brief>
                                    类别: {item.category} <br />
                                    报名时间: {new Date(item.entry_begin).toLocaleDateString()} - {new Date(item.entry_end).toLocaleDateString()}
                                </List.Item.Brief>
                            </Link>
                        </List.Item>
                    ))}
                    <List.Item>
                        <Pagination
                            current={store.page}
                            hasNext={store.hasMore && !store.loadFailed}
                            onChange={v => store.page = v} />
                    </List.Item>
                </List>
            </div>
        );
    }
}
