import React, {Component} from 'react';
import {render} from 'react-dom';
import Grid from './Grid'

class App extends Component {
  state = {
    x: 0,
    y: 0,
    size: 0,
  };

  generateGrid(e) {
    e.preventDefault()
    const x = this.refs.x.value
    const y = this.refs.y.value
    const size = this.refs.size.value
    this.setState({
      x,
      y,
      size,
    })
  }

  render() {
    return (
      <div className='ui container'>
        <h1>
          qtπ
        </h1>
        <form className='ui form' onSubmit={::this.generateGrid}>
          <div className='three fields'>
            <div className='field'>
              <label>Width</label>
              <input ref='x' placeholder='width'/>
            </div>
            <div className='field'>
              <label>Height</label>
              <input ref='y' placeholder='height'/>
            </div>
            <div className='field'>
              <label>Width</label>
              <input ref='size' placeholder='size'/>
            </div>
          </div>
          <div className='field'>
            <button className='ui button'>
              Submit
            </button>
          </div>
        </form>
        <hr />
        <Grid size={this.state.size} dimensions={this.state}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
