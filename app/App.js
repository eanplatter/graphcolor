import React, {Component} from 'react';
import {render} from 'react-dom';
import Grid from './Grid'
import Square from './Square'

class App extends Component {
  state = {
    x: 0,
    y: 0,
    size: 0,
    hex: '#BFFF00',
  };

  generateGrid(e) {
    e.preventDefault()
    console.log(this.refs.hex.value)
    const x = this.refs.x.value
    const y = this.refs.y.value
    const size = this.refs.size.value
    const hex = this.refs.hex.value
    this.setState({
      x,
      y,
      size,
      hex,
    })
  }

  render() {
    return (
      <div className='ui container'>
        <h1>
          qtπ
        </h1>
        <form className='ui form' onSubmit={::this.generateGrid}>
          <div className='four fields'>
            <div className='field'>
              <label>Width</label>
              <input type='number' ref='x' placeholder='width'/>
            </div>
            <div className='field'>
              <label>Height</label>
              <input type='number' ref='y' placeholder='height'/>
            </div>
            <div className='field'>
              <label>Width</label>
              <input type='number' ref='size' placeholder='size'/>
            </div>
            <div className='field'>
              <div className='ui two fields'>
                <div className='field'>
                  <label>Hex</label>
                  <input ref='hex' placeholder='hex'/>
                </div>
                <div className='field'>
                  <label>Color</label>
                  <Square overrideColor={this.state.hex} size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className='field'>
            <button className='ui button'>
              Submit
            </button>
          </div>
        </form>
        <hr />
        <Grid hex={this.state.hex} size={this.state.size} dimensions={this.state}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
