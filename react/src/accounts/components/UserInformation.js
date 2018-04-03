import React from 'react';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../style/UserInformation.less';

class UserInformation extends React.Component {
  state = {
    showEditing: false,
  }

  editResume = () => {
    this.setState({ showEditing: true });
  }

  updateResume = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
    this.setState({ showEditing: false });
  }

  render() {
    const { user } = this.props;
    const { getFieldProps } = this.props.form;
    const { showEditing } = this.state;
    return (
      <div className="information-container">
        {
          !showEditing &&
          <div 
            className="edit" 
            onClick={this.editResume}
            onKeyUp={() => {}}
          />
        }
        {
          this.state.showEditing &&
          <div 
            className="check" 
            onClick={this.updateResume}
            onKeyUp={() => {}}
          />
        }
        <div className="avatar">
          <img src={user.avatar} alt="头像" />
        </div>
        <div className="name">
          {user.name} 
        </div>
        {
          !this.state.showEditing &&
          <div className="resume">
            {user.resume}
          </div>
        }
        {
          showEditing &&
          <List>
            <TextareaItem
              {...getFieldProps('count', {
                initialValue: user.resume,
              })}
              rows={5}
              count={100}
            />
          </List>
        }
      </div>
    );
  }
}

export default createForm()(UserInformation);
