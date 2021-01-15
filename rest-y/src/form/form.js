import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      method: 'get',
      url: '',
      display: false
    }
  }

  handleSubmit = async(event)=>{
    event.preventDefault();
    const url = event.target.url.value
    this.setState({url})
    
    try{
      var api = await fetch(url, {method: this.state.method || 'GET', mode: 'cors'})
        .then(response =>{

          let headers = {};``
          console.log('response.headers:', response.headers)
          for(let pair of response.headers.entries()){
            headers[pair[0]] = pair[1]
          }

          console.log('what is headers?: ', headers);
          this.props.giveHeaders(headers);

          if(response.status !==200)return;
          return response.json()
        });
        // console.log('api after fetch: ', api);
        console.log('api looking for headers: ', api)
      
      this.props.getResults(api)
      

    }catch(e){
      console.error(e);
    }
    // try{
    //   // console.log('api looking for headers: ', api)
    //   // let data = await api.json();

    //   let headers = {};
    //   console.log('api.headers:', api.headers)
    //   for(let pair of api.headers.entries()){
    //     headers[pair[0]] = pair[1]
    //   }

    //   console.log('what is headers?: ', headers);
    //   // console.log('this is data without the function',data);
    //   this.props.giveHeaders(headers);
      
    // }catch(e){
    //   console.error(e);
    // }
    
    if(this.state.method){this.setState({display: true})}
  }

  handleClick = e=>{
    const method = e.target.name;
    this.setState({method})
    if(this.state.url){this.setState({display: true})}
  }

  render(){
    // console.log(this.props)
    return(

      <section id="formRender">

        <section id="formInput">
          <form onSubmit={this.handleSubmit}>
            <input name="url" placeholder="enter a url" type="text" />
            <button type="submit">Submit</button>
          </form>
        </section>

        <section id="routeButtons" onClick={this.handleClick}>
          <button name="get">GET</button>
          <button name="put">PUT</button>
          <button name="post">POST</button>
          <button name="delete">DELETE</button>
        </section>

        {!this.state.display ? "":
          <section id="displayItems">
            <h3>URL: {this.state.url}</h3>
            <h3>METHOD: {this.state.method}</h3>
          </section>
        }

      </section>
    )
  }
}

// function 



export default Form;
  
  // handleDohtem = e =>{
  //   e.preventDefault();
  //   let action = e.target.value;
  //   this.setState({method: action});
  //   {this.state.url}
  //   {/* set turnary to show section only when both states have been filled */}
  // }

  // handleText = e =>{
  //   e.preventDefault();
  //   let inputUrl = e.target.value;
  //   this.setState({url: inputUrl});
  //   {/* set turnary to show section only when both states have been filled */}
  // }

  // render(){
  //   return(
  //     <>
  //       {/* set turnary to show section only when both states have been filled */}
        
  //       <section>
  //         <h3>{this.state.method} : {this.state.url}</h3>  
  //       </section>
  //       <form id="form" onSubmit={this.handleSubmit}>
  //         <section id="textInputParent">
  //           <fieldset>
  //             <input id="textInput" onChange={this.handleText} /> 
  //             <button id="get" value="GET" onClick={this.handleDohtem}>GET</button>
  //             <button id="post" value="POST" onClick={this.handleDohtem}>POST</button>
  //             <button id="update" value="PUT" onClick={this.handleDohtem}>PUT</button>
  //             <button id="delete" value="DELETE" onClick={this.handleDohtem}>DELETE</button>
  //           </fieldset>
  //         </section>
  //       </form>
  //     </>
  //   )
  // }
