import React from 'react';
import { Flex, Icon, Picker } from 'antd-mobile';
import './Pagination.less';

export default class Pagination extends React.Component {
    static defaultProps = {
        current: 1,
        hasNext: true,
    }

    state = {
        page: this.props.current,
    }

    componentWillReceiveProps({ current }) {
        this.setState({ page: current });
    }

    get lastPage() {
        return !this.props.hasNext || this.props.total && this.props.total - this.state.page === 0;
    }

    changePage(value) {
        if (this.props.onChange && value !== this.state.page) {
            this.props.onChange(value);
        }
        this.setState({ page: value });
    }

    render() {
        const pickerData = Array.from({ length: this.props.total || (this.state.page + (this.lastPage ? 0 : 1)) }, (_, i) => i + 1)
            .map(v => ({ value: v, label: v }));
        return (
            <Flex className="pagination-container">
                {this.state.page > 1 && (
                    <Flex.Item>
                        <button
                            className={this.lastPage ? 'highlighted' : ''}
                            onClick={() => this.changePage(Number(this.state.page) - 1)}
                        >
                            <Icon type="left" /> 上一页
                        </button>
                    </Flex.Item>
                )}
                {this.state.page > 1 && (
                    <Flex.Item>
                        <Picker data={pickerData} cols="1" onOk={([v]) => this.changePage(v)}>
                            <button>
                                <span className="highlighted">{this.state.page}</span>
                                {this.props.total && <span> &nbsp;/&nbsp;{this.props.total}</span>}
                            </button>
                        </Picker>
                    </Flex.Item>
                )}
                <Flex.Item>
                    <button
                        className={!this.lastPage ? 'highlighted' : ''}
                        onClick={() => !this.lastPage && this.changePage(Number(this.state.page) + 1)}
                    >
                        {this.lastPage ? '没有更多啦' : '下一页'} {!this.lastPage && <Icon type="right" />}
                    </button>
                </Flex.Item>
            </Flex>
        );
    }
}
