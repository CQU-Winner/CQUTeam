import React from 'react';
import { ImagePicker, Modal, List, Checkbox } from 'antd-mobile';
import { observer } from 'mobx-react';
import PostPageStore from '../stores/PostPageStore';
import SearchBar from '../../shared/SearchBar/SearchBar';

@observer
class GroupsPicker extends React.Component {
  onChange = (files, type, index) => {
    console.log(files, type, index);
    PostPageStore.changeMembers(files);
  };

  onAddImageClick = (e) => {
    e.preventDefault();
    // this.setState({
    //   files: this.state.files.concat({
    //     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    //     id: '3',
    //   }),
    // });
    PostPageStore.openModal();
  };

  onTabChange = (key) => {
    console.log(key);
  };

  onClose = () => {
    PostPageStore.closeModal();
  }

  onSelected = (val) => {
    const member = {
      url: val.avatar,
      id: val.id,
      name: val.name,
      resume: val.resume,
    };
    PostPageStore.pushMember(member);
  }

  render() {
    const { CheckboxItem } = Checkbox;
    return (
      <div>
        <ImagePicker
          files={PostPageStore.members}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={PostPageStore.members.length < 5}
          onAddImageClick={this.onAddImageClick}
        />
        <Modal
          visible={PostPageStore.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose}
          title="搜索队友"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 400, overflow: 'scroll' }} >
            <SearchBar store="postPageStore" />
            <List renderHeader={() => '成员列表'}>
              {PostPageStore.membersSearched.map(member => (
                <CheckboxItem key={member.id} onChange={() => this.onSelected(member)}>
                  {member.name}
                </CheckboxItem>
              ))}
            </List>
          </div>
        </Modal>
      </div>
    );
  }
}

export default GroupsPicker;
