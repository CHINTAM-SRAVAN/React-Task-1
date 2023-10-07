import './App.css';
import React,{Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state={subject:""}
    };

    handleChange=event=>{
        const a=event.target.value;
        var count=0;
        if(a.length>0){
          count=1
        }
        var prev=true
        for(var i=0;i<a.length;i++){
          if(a.charAt(i)===" "){
              if(!prev){
                count++;
              }
              prev=true;
              continue;
          }
          prev=false;

        }
        this.setState({
            subject:count
        })
    }
  render(){
  return (

    <div>
      <center>
    <h1>Responsive Paragraph Word Counter</h1>
    <textarea onChange={this.handleChange} style={{alignContent:'center'}} rows={16} cols={70}></textarea>
    <h2><b>Word Count:{this.state.subject}</b></h2>
    </center>
    
    </div>
  );
}
}
export default App;
