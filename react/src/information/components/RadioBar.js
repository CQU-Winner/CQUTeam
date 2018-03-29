import React from 'react';
import { Flex } from 'antd-mobile';
import './RadioBar.less';

export default class RadioBar extends React.Component {
    static defaultProps = {
        radios: [],
    }

    state = {
        selected: this.props.value,
    }

    componentWillReceiveProps({ value }) {
        this.setState({ selected: value });
    }

    changeRadio(value) {
        if (this.props.onChange && value !== this.state.selected) {
            this.props.onChange(value);
        }
        this.setState({ selected: value });
    }

    render() {
        return (
            <Flex className={`radios-container ${this.props.className}`} align="center" style={this.props.style}>
                {this.props.radios.map((item) => {
                    return (
                        <Flex.Item
                            key={item.value}
                            className={item.value === this.state.selected && 'highlighted'}
                            onClick={() => this.changeRadio(item.value)}
                        >
                            {item.icon} {item.label}
                        </Flex.Item>
                    );
                })}
            </Flex>
        );
    }
}
