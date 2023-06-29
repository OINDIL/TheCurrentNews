import './App.css';
import {Navbar} from './Components/Navbar'
import React, { Component } from 'react'
import NewsForm from './Components/NewsForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<NewsForm key="general" pageSize={8} country="in" category="general"/>}></Route>
          <Route path='/general' element={<NewsForm key="general" pageSize={8} country="in" category="general"/>}></Route>
          <Route path='/business' element={<NewsForm key="business" pageSize={8} country="in" category="business"/>}></Route>
          <Route path='/entertainment' element={<NewsForm key="entertainment" pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route path='/health' element={<NewsForm key="health" pageSize={8} country="in" category="health"/>}></Route>
          <Route path='/science' element={<NewsForm key="science" pageSize={8} country="in" category="science"/>}></Route>
          <Route path='/sports' element={<NewsForm key="sports" pageSize={8} country="in" category="sports"/>}></Route>
          <Route path='/technology' element={<NewsForm key="technology" pageSize={8} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
