import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      method: 'No method selected',
      url: 'No current url input'
    }
  }

  handleDohtem = e =>{
      e.preventDefault();
      let action = e.target.value;
      this.setState({method: action});
  }

  handleText = e =>{
    e.preventDefault();
    let inputUrl = e.target.value;
    this.setState({url: inputUrl});
    
  }

  render(){
    return(
      <>
        <section>
          {this.state.method} : {this.state.url}
        </section>
        <form id="form">
          <section id="textInputParent">
            <fieldset>
              <input id="textInput" onChange={this.handleText} /> 
              <button id="get" value="GET" onClick={this.handleDohtem}>GET</button>
              <button id="post" value="POST" onClick={this.handleDohtem}>POST</button>
              <button id="update" value="PUT" onClick={this.handleDohtem}>PUT</button>
              <button id="delete" value="DELETE" onClick={this.handleDohtem}>DELETE</button>
            </fieldset>
          </section>
        </form>
      </>
    )
  }

}

export default Form;