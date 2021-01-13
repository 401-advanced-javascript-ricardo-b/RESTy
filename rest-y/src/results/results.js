import React from 'react';
import ReactJson from 'react-json-view'

class Results extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state = {
      
  //   }
  // }

  render(){
    // console.log('props', this.props);
    return(

      <section id="resultsRenderParent">

          <section id="resultsRender">
            <h3>Count: {this.props.count}</h3> 
              {/* <ReactJson src=/> */}
            <h3>Headers:</h3>
              <ReactJson src={this.props.headers}/>
            <h3>Results:</h3>
              <ReactJson src={this.props.results}/>
          </section>
        
      </section>
    )
  }
}
export default Results;