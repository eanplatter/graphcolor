import React, {Component} from 'react'
import Square from './Square'

export default class Grid extends Component {
  static propTypes = {
    dimensions: React.PropTypes.object,
    size: React.PropTypes.number,
  };

  render() {
    const grid = []
    for (let i = 0; i < this.props.dimensions.x * this.props.dimensions.y; i++) {
      let status = 0
      grid.push(<Square size={this.props.size} onClick={() => status = 1} status={status} />)
    }
    return (
      <div style={{width: `${this.props.dimensions.x * this.props.size}px`, display: 'inline-block'}}>
        {grid}
      </div>
    )
  }
}


