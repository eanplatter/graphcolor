import React from 'react'

export default class Square extends React.Component {
  propTypes: {
    size: React.PropTypes.number,
    hex: React.PropTypes.string,
    onClick: React.PropTypes.func,
    overrideColor: React.PropTypes.string
  };

  state = {
    color: null,
  };

  setColor = (color) => {
    console.log('setting color', color)
    this.setState({
      color,
    })
  };

  render() {
    console.log(this.props)
    const color = this.state.color || this.props.overrideColor
    return (
      <div
        style={{
          backgroundColor: color,
          cursor: 'pointer',
          height: this.props.size,
          width: this.props.size,
          fontSize: '35px',
          border: '1px solid black',
          textAlign: 'center',
          float: 'left',
        }}
        onClick={this.setColor.bind(this, this.props.hex)}
      >
      </div>
    )
  }
}
