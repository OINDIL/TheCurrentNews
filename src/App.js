import './App.css';
import { Navbar } from './Components/Navbar'
import React, { Component } from 'react'
import NewsForm from './Components/NewsForm';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
export default class App extends Component {
  pageSize = 8
  apiKey = '255b5a8b5a2241dfb62210fb69c61233'
  // apiKey = 'fd09e8fd7ea240baa387a5d28a80b8f8'
  country = 'in'
  state = {
    progress: 0,
    mode: 'light'
  }
  setProgress = (value) => {
    this.setState({
      progress: value
    })
  }
  setMode = () =>{
    if(this.state.mode === 'light'){
      this.setState({mode: 'dark'})
      document.body.style.backgroundColor = 'rgb(32, 33, 36)' 
      document.body.style.color = 'white' 
    }
    else{
      this.setState({mode:'light'})
      document.body.style.backgroundColor = 'white' 
      document.body.style.color = 'black'
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} setMode={this.setMode}/>
          <LoadingBar
            color='green'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<NewsForm mode={this.state.mode} setProgress={this.setProgress} key="logo" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="general" />}></Route>
            <Route path='/general' element={<NewsForm mode={this.state.mode} setProgress={this.setProgress} key="general" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="general" />}></Route>
            <Route path='/business' element={<NewsForm mode={this.state.mode} setProgress={this.setProgress} key="business" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="business" />}></Route>
            <Route path='/entertainment' element={<NewsForm mode={this.state.mode} setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="entertainment" />}></Route>
            <Route path='/health' element={<NewsForm mode={this.state.mode} setProgress={this.setProgress} key="health" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="health" />}></Route>
            <Route path='/science' element={<NewsForm mode={this.state.mode} setProgress={this.setProgress} key="science" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="science" />}></Route>
            <Route path='/sports' element={<NewsForm mode={this.state.mode} setProgress={this.setProgress} key="sports" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="sports" />}></Route>
            <Route path='/technology' element={<NewsForm mode={this.state.mode} setProgress={this.setProgress} key="technology" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
