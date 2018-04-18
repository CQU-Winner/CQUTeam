import React from 'react';
import { List, TextareaItem, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import updateUserInf from '../stores/AccountsStore';
import '../style/UserInformation.less';

class UserInformation extends React.Component {
  state = {
    showEditing: false,
    name: this.props.user.name,
    resume: this.props.user.resume,
  }

  editResume = () => {
    this.setState({ showEditing: true });
  }

  updateResume = () => {
    this.props.form.validateFields(async (error, value) => {
      await updateUserInf(value);
      this.setState({
        name: value.name,
        resume: value.resume,
        showEditing: false, 
      });
    });
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
    const { showEditing, name, resume } = this.state;
    const isSelfAndNotBeBanned = user.user_type && user.user_type !== 'banned';
    
    return (
      <div className="information-container">
        {
          isSelfAndNotBeBanned ? this.renderEditIcon() : null
        }
        <div className="avatar">
          <img src={user.avatar} alt="头像" />
        </div>
        {
          showEditing ?
          <List>
            <InputItem
              {...getFieldProps('name', {
                initialValue: name,
              })}
            />
            <TextareaItem
              {...getFieldProps('resume', {
                initialValue: resume,
              })}
              rows={5}
              count={100}
            />
          </List> : (
            <React.Fragment>
              <div className="name">
                {name} 
              </div> 
              <div className="resume">
                {resume}
              </div>
            </React.Fragment>
          )
        }
      </div>
    );
  }
}

export default createForm()(UserInformation);
