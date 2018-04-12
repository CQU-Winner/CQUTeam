import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';
import { apiRoute } from '../../shared/consts';
import '../style/GreetingCard.less';

class GreetingCard extends React.Component {
  handleGreeting = (id, operation) => () => {
    const url = `${apiRoute}greetings/${id}/${operation}`;
    axios.put(url).then(() => {
      Toast.success('操作成功!', 1);
    }).catch(() => {
      Toast.fail('操作失败，请重试！', 1);
    });
  }

  renderTag = (status) => {
    if (status === 'pending') {
      return (
        <div className="tag pending">
          待通过
        </div>
      );
    } else if (status === 'rejected') {
      return (
        <div className="tag rejected">
          已回绝
        </div>
      );
    } else if (status === 'resolve') {
      return (
        <div className="tag resolve">
          已同意
        </div>
      );
    }
  }

  render() {
    const { greeting, type } = this.props;
    const isResGreeting = type === '待处理';
    return (
      <div className="greeting-card">
        <div className="card-header">
          <Link to={`/accounts/${greeting.id}`}>
            <div className="user">
              <div className="avatar">
                <img src={greeting.avatar} alt="avatar" />
              </div>
              <div className="name">
                {greeting.name}
              </div>
            </div>
          </Link>
          { this.renderTag(greeting.status) }
        </div>
        {
          greeting.contact &&
          <div className="card-content">
            {greeting.contact}
          </div>
        }
        {
          isResGreeting && 
          <div className="btn-list">
            <Button 
              type="ghost" 
              size="small" 
              onClick={this.handleGreeting(greeting.id, 'denial')} 
            >
              回绝
            </Button>
            <Button 
              type="ghost" 
              size="small"
              onClick={this.handleGreeting(greeting.id, 'approval')} 
            >
              同意
            </Button>
          </div>
        }
      </div>
    );
  }
}

export default GreetingCard;
