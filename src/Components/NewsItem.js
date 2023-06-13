import React, { Component } from "react";

export default class extends Component {
  constructor(){
    super()
    // console.log("hello I am a constructor")
  }
  render() {
    let { title, description,imageUrl } = this.props;
    return (
      <div className="my-4">
        <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="#" className="btn btn-sm btn-success">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
