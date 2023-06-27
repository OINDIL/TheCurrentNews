
import './App.css';
import {Navbar} from './Components/Navbar'

import React, { Component } from 'react'
import NewsForm from './Components/NewsForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsForm pageSize={8} country="in" category="technology"/>
        
      </div>
    )
  }
}
