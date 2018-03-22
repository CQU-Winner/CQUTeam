import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';
import '../style/GreetingCard.less';

class GreetingCard extends React.Component {
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
    } else if (status === 'rejected') {
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
            <Button type="ghost" inline size="small" >回绝</Button>
            <Button type="ghost" inline size="small" >同意</Button>
          </div>
        }
      </div>
    );
  }
}

export default GreetingCard;
