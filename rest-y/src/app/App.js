

import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import './app.scss';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      url: 'Please enter a URL',
    }
  }

  // handleWords = e => {
  //   let newWords = e.target.value;
  //   this.setState({words: newWords});
  // }

  // handleClick = e =>{
  //   e.preventDefault();
  //   // let reversedWords = this.state.words.split('').reverse().join('');
  //   let words = this.state.words;
  //   this.setState({words: words});
  // }

  render(){
    return(
      <>
        <Header />
        <h3>{this.state.url}</h3>
        <Form />
        <Footer />
      </>
    )
  }
}

export default App