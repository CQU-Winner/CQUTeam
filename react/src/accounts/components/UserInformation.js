import React from 'react';
import '../style/UserInformation.less';

class UserInformation extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="information-container">
        <div className="avatar">
          <img src={user.avatar} alt="头像" />
        </div>
        <div className="name">
          {user.name}
        </div>
        <div className="resume">
          {user.resume}
        </div>
      </div>
    );
  }
}

export default UserInformation;
