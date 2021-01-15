

import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import Results from '../results/results';
import './app.scss';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: {}
    }
  }

  // allows class childeren to change count, headers and results
  getResults = (info)=>{ //could pass headers here, if we pass multiple arguments
    // console.log('this is info on get results from app:',info)
    this.setState({results: info.results});
    this.setState({count: info.count});
    // this.setState({headers: info.headers});
    // console.log('this.state', this.state);
  }

  getHeaders = (headers)=>{
    this.setState({ headers });
  }

  render(){
    return(
      <div id="appRender">
        <Header />
        <Form 
          giveHeaders={this.getHeaders}
          getResults={this.getResults}
        />
        <Results
          count={this.state.count}
          results={this.state.results}
          headers={this.state.headers}
          // display={this.state.display}
        />
        <Footer />
      </div>
    )
  }
}

export default App