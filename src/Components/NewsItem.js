import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source, mode } = this.props;
    return (
      <div className='container my-4'>
        <div className={`card bg-${this.props.mode} text-${mode === 'light' ? 'dark' : 'light'}`} style={{ width: "18rem", height: "35rem" }}>
          <img src={imageUrl} className="card-img-top" width={200} height={200} alt={title} />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className={"card-title"}>{title}...</h5>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "50%" }}>{source}</span>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className={`text-${mode === 'light' ? 'dark' : 'light'}`}>By <span style={{ fontWeight: 'bold' }}>{!author ? "Unknown" : author}</span> on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
