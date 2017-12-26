import React, { Component } from 'react';
import './App.css';

//创建组件的两种方法
// 类方法
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
      show:false
    }
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }

  componentDidMount(){
    this.timeId = setInterval(()=>{
      this.tick();
    },1000);
    console.log('componentDidMount')
  }

  componentWillUnmount(){
      clearInterval(this.timeId);
  }

  handleClick(e){
    e.preventDefault()
    console.log('click',this);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <h2 onClick={ (e)=>{this.handleClick(e) } }>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

// 函数方法
// function tick(props){
//   return <h1>hello , {new Date().toLocaleTimeString()}</h1>
// }

// function App(props) {
//   return (
//     <div>
//       <Welcome name="nihao"></Welcome>
//       <Welcome name="真好"></Welcome>
//     </div>
//   )
// }
// const elemnt = <App name="window"></App>

export default App;
