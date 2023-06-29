import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class NewsForm extends Component {
  static defaultProps = {
    pageSize: 8,
    country: "in",
    category:"science"
  }
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }
  constructor() {
    super()
    // console.log("hello I am a constructor")
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async updateNews(){
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=255b5a8b5a2241dfb62210fb69c61233&page=${this.state.page}&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false })
  }
  async componentDidMount() {
    this.updateNews()
  }
  handleNextClick = async () => {
    this.setState({page: this.state.page + 1})
    this.updateNews()
  }
  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1})
    this.updateNews()
  }
  render(props) {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{fontFamily:"fira code"}}>Today'<span style={{color:"green"}}>s</span> top headlines <span className="badge rounded-pill text-bg-success">{this.props.category}</span>
</h2>
        {this.state.loading===true && <Spinner/>}
        <div className="row">
          {!(this.state.loading) && this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title === null ? "" : element.title.slice(0,70)} description={element.description === null ? element.title.slice(0,70) : element.description.slice(0,100)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
