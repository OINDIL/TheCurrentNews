import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class NewsForm extends Component {
  static defaultProps = {
    pageSize: 8,
    country: "in",
    category: "science"
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
      loading: true,
      page: 1,
      totalResults: 0
    }
  }
  capitalFirstStr(string) {
    return string.charAt(0).toUpperCase() + string.slice (1);
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&page=${this.state.page}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    console.log("componentDidMount"+this.state.page)
  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&page=${this.state.page}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    console.log("after increament "+this.state.page)
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
    // console.log(this.state.articles)
  }
  render() {
    return (
      <>
        <h2 className='text-center' style={{ fontFamily: "fira code" }}>Today'<span style={{ color: "green" }}>s</span> top headlines <span className="badge rounded-pill text-bg-success">{this.capitalFirstStr(this.props.category)}</span>
        </h2>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        {this.state.loading === true && <Spinner />}
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title === null ? "" : element.title.slice(0, 70)} description={element.description === null ? element.title.slice(0, 70) : element.description.slice(0, 100)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}
