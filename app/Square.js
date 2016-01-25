import React from 'react'

export default class Square extends React.Component {
  propTypes: {
    status: React.PropTypes.number,
    size: React.PropTypes.number
  };

  render() {
    const statusArr = ['', '•', '≈']

    return (
      <div style={{
        cursor: 'pointer',
        height: this.props.size,
        width: this.props.size,
        fontSize: '35px',
        border: '1px solid blue',
        textAlign: 'center',
        float: 'left',
      }}>
        {statusArr[this.props.status]}
      </div>
    )
  }
}
