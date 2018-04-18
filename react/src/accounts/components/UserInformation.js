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
      console.log(value.resume);
    });
    this.setState({ showEditing: false });
  }

  renderEditIcon = () => {
    if (this.state.showEditing) {
      return (
        <div 
          className="check" 
          onClick={this.updateResume}
          onKeyUp={() => {}}
        />
      );
    } else {
      return (
        <div 
          className="edit" 
          onClick={this.editResume}
          onKeyUp={() => {}}
        />
      );
    }
  }

  render() {
    const { user } = this.props;
    const { getFieldProps } = this.props.form;
    const { showEditing } = this.state;
    const isSelfAndNotBeBanned = user.user_type && user.user_type !== 'banned';
    
    return (
      <div className="information-container">
        {
          isSelfAndNotBeBanned ? this.renderEditIcon() : null
        }
        <div className="avatar">
          <img src={user.avatar} alt="头像" />
        </div>
        <div className="name">
          {user.name} 
        </div>
        {
          showEditing ?
          <List>
            <TextareaItem
              {...getFieldProps('resume', {
                initialValue: user.resume,
              })}
              rows={5}
              count={100}
            />
          </List> : ( 
            <div className="resume">
              {user.resume}
            </div>)
        }
      </div>
    );
  }
}

export default createForm()(UserInformation);
