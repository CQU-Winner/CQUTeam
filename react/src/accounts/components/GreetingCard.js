import React from 'react';
import { Link } from 'react-router-dom';
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
    }
    return (
      <div className="tag resolve">
        已同意
      </div>
    );
  }

  render() {
    const { greeting } = this.props;
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
          {this.renderTag(greeting.status)}
        </div>
        {
          greeting.contact &&
          <div className="card-content">
            {greeting.contact}
          </div>
        }
      </div>
    );
  }
}

export default GreetingCard;
