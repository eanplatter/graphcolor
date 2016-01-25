import React, {Component} from 'react'
import Square from './Square'

export default class Grid extends Component {
  static propTypes = {
    dimensions: React.PropTypes.object,
    size: React.PropTypes.number,
    hex: React.PropTypes.string,
    overrideColor: React.PropTypes.string
  };

  state = {
    color: this.props.hex,
  };

  render() {
    const grid = []
    for (let i = 0; i < this.props.dimensions.x * this.props.dimensions.y; i++) {
      grid.push(
        {
          hex: this.props.hex,
          size: this.props.size,
        }
      )
    }
    const renderGrid = grid.map((i, index) => {
      return (
        <Square
          hex={i.hex}
          size={i.size}
          onClick={() => console.log(index)}
          overrideColor={this.props.overrideColor}
        />
      )
    })
    return (
      <div style={{width: `${this.props.dimensions.x * this.props.size}px`, display: 'inline-block'}}>
        {renderGrid}
      </div>
    )
  }
}


