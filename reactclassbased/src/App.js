import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  key = process.env.key
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  pageSize = 5;
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.key} country="in" category="general" />} />
          <Route path='/business' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.key} country="in" key="business" category="business" />} />
          <Route path='/entertainment' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.key} country="in" key="entertainment" category="entertainment" />} />
          <Route path='/general' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.key} country="in" key="general" category="general" />} />
          <Route path='/health' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.key} country="in" key="health" category="health" />} />
          <Route path='/science' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.key} country="in" key="science" category="science" />} />
          <Route path='/sports' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.key} key="sports" country="in" category="sports" />} />
          <Route path='/technology' element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" apiKey={this.key} country="in" category="technology" />} />

        </Routes>
      </Router>
    )
  }
}
