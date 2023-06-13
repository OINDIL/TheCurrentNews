import React, { Component } from 'react'
import NewsItem from './NewsItem';
export default class NewsForm extends Component {

  constructor() {
    super()
    // console.log("hello I am a constructor")
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=255b5a8b5a2241dfb62210fb69c61233"
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles})
  }
  render(props) {
    return (
      <div className='container my-3'>
        <h2>Today's top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title===null?"":element.title} description={element.description===null?element.title:element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div>
      </div>
    )
  }
}
