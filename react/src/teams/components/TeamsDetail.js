import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class TeamsDetail extends React.Component {
  render() {
    if (this.props.detail) {
      const { founder } = this.props.detail;
      return (
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={founder.name}
              thumb={founder.avatar}
              extra={founder.resume}
            />
            <Card.Body>
              <div>
                t
              </div>
            </Card.Body>
            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      );
    }
    return null;
  }
}

export default TeamsDetail;
