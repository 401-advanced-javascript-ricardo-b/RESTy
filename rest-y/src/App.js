// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import Header from './header';
import Footer from './footer';
import './app.scss';


class App extends React.Component{
  constructon(props){
    super(props);
    this.state = {
      words: 'state is empty',
    }
  }
  
  handleWords = e =>{
    let newWords = e.target.value;
    this.setState({words: newWords});
  }
  
  handleClick = e =>{
    e.preventDefault();
    let reversedWords = this.state.words.split('').reverse().join('');
    this.setState({words: reversedWords});
  }
  
  render(){
    return(
      <>
        <Header />
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWords} />
        <button onClick={this.handleClick} />
        <Footer />
      </>
    )
  }
}

export default App;
