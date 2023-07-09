import React, { Component } from 'react'
import loading from './loading-73.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={loading} alt="loading" height={'70px'} width={'70px'}/>
      </div>
    )
  }
}

export default Spinner