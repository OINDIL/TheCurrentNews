import React, { Component } from 'react'
import NewsItem from './NewsItem';
export default class 
 extends Component {
  render(props) {
    return (
      <div className='container my-3'>
        <h2>Today's top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title='The OG' description="the OG's second app" imageUrl="https://assets-prd.ignimgs.com/2023/05/03/xbox-showcase-1683121552988.jpg?width=1280"/>
          </div>
          <div className="col-md-4">
            <NewsItem title='The OG' description="the OG's second app"/>
          </div>
          <div className="col-md-4">
            <NewsItem title='The OG' description="the OG's second app"/>
          </div>
          <div className="col-md-4">
            <NewsItem title='The OG' description="the OG's second app"/>
          </div>
          <div className="col-md-4">
            <NewsItem title='The OG' description="the OG's second app"/>
          </div>
          <div className="col-md-4">
            <NewsItem title='The OG' description="the OG's second app"/>
          </div>
        </div>
      </div>
    )
  }
}
