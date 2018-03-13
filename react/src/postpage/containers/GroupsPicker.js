import React from 'react';
import { ImagePicker, Modal } from 'antd-mobile';
import SearchBar from '../../shared/SearchBar/SearchBar';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class GroupsPicker extends React.Component {
  state = {
    files: data,
    modal: false,
  };

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  };

  onAddImageClick = (e) => {
    e.preventDefault();
    // this.setState({
    //   files: this.state.files.concat({
    //     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    //     id: '3',
    //   }),
    // });
    this.setState({
      modal: true,
    });
  };

  onTabChange = (key) => {
    console.log(key);
  };

  onClose = () => {
    this.setState({
      modal: false,
    });
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
          onAddImageClick={this.onAddImageClick}
        />
        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose}
          title="搜索队友"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 400, overflow: 'scroll' }}>
            <SearchBar />
          </div>
        </Modal>
      </div>
    );
  }
}

export default GroupsPicker;
