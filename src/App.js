import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './paper.css'



/*function App(){
return(
 <h1>Hello World</h1>)}
export default App;

function App(){
return(
<div>
<h1>Hello World</h1>
<h1>Hello World</h1>
  </div> );}
export default App;
  
//ARROW funtion
let App=()=> {
  return (
    <div>
   <h1>Hello World</h1>
    <h1>Hello World</h1>
</div> )}
export default App;
*/

// function App(props)
// {
//  return <div>
//  <h1>{props.msg1}</h1>
//  <h1>{props.msg2}</h1>
//   </div> 
// }   
// function OtherComponent(props)
//   { const flag=1;
//      let output;
//     if(flag)
//       output= <p  className={props.cName}>Message</p>;
//     else
//      output= <p  className={props.cName}>No Message to show</p>;  
// return output;
//   }
// function Listdemo(props){
//   var arr=[];
//     for(let i=0; i<props.name.length;i++)
//     {
//      {arr.push(<li>{props.name[i]}</li>)}
//     }
//      return <ul>{arr}</ul>  
//     }
//   function Parent()
//   { return(
//     <div>
//     <App msg1='First Message' msg2='Second message'/>
//     <OtherComponent cName='styled'/>
//     <Listdemo name={["item1","item2","item3","item4"]}></Listdemo>
//     </div>
//   )
//   }
// export default Parent;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      list: this.props.obj,
   number:0 };
    this.setValue = this.setValue.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.SwapUp= this.SwapUp.bind(this);
    this.SwapDown= this.SwapDown.bind(this);
    this.Delete= this.Delete.bind(this);
    this.state.item=[];
    
  
  }
  getList(props) {
    console.log('obj', this.props.obj)
    let items = [];
    // return this.state.list.map((item,index)=><li onClick={()=> this.setStatus(item)} className={item.status? "paper-btn btn-block btn-success ":"paper-btn btn-block"} >{item.name}</li>); //to change status
    return items = this.state.list.map((item, index) => <ListItem item={item} list={this.state.list}  SwapUp={this.SwapUp} SwapDown={this.SwapDown} Delete={this.Delete} setStatus={this.setStatus}></ListItem>)
  }
  getValue = (e) => {
    console.log(e.target.value);
    // newItem= e.target.value;
    this.setState({ newItem: e.target.value });
  }
  setValue = (e) => {
    if (this.state.newItem !== "" && this.state.newItem.trim()) {
      let l = this.state.list;
      let object = { name: this.state.newItem, status: false }
      l.push(object);
      this.setState({ list: l, newItem: '' })
    
      document.getElementById("textarea").value = ''
    }
  }
setStatus(item) {
    let l = this.state.list;
    let i = l.indexOf(item);
    l[i].status = !l[i].status;
    this.setState(
      { list: l }
    )

    let count=this.state.number;   //completed item
    if(l[i].status)
      {count++} 
     else
      {count--} 
      this.setState(
        {number:count }
      )
    // this.state.num=count;
    // this.setState(
    //   {num:count}
    // )
  }
  SwapUp(item) {
    let x= this.state.list;
  let i= x.indexOf(item);    
  { if(i!=0){
      [x[i],x[i-1]]=[x[i-1],x[i]]
    }
  }
    this.setState(
      {list:x}
    )
  }
  SwapDown(item) {
    let x= this.state.list;
  let i= x.indexOf(item);    
   if(i!=this.props.obj.length-1){
      [x[i+1],x[i]]=[x[i],x[i+1]]
    }
    else alert("this is already at the bottom");
  
    this.setState(
      {list:x}
    )
  }
  Delete(item){
    alert("Are you sure you want to delete this task?")
    let x= this.state.list;
    let i= x.indexOf(item);  
      x.splice(i,1);
    this.setState(
      {list:x}
    )
  }
  render() {
    return <div className="text-center todo" >
      <h1 className="alert alert-dark">ToDo List</h1>

      <button onClick={this.setValue}>Add Task</button>
      <br></br>
      <br></br>

      <input type="text" id="textarea" onChange={this.getValue} ></input>
      <br></br>
      <br></br>
      <p className="row flex-center" style={{marginTop:20}}> Completed Tasks: {this.state.number}/{this.state.list.length})</p>

      <div>
        <ul className="demo">
          {this.getList()}
        </ul>
      </div>
    </div>
  }
}
class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      list: this.props.list
     }
  }
  render() {
    console.log('ListItem',this.props)
    return <div>
      <li onClick={() => { this.props.setStatus(this.props.item) }} className={this.props.item.status ? "paper paper-btn btn-block btn-success" : "paper paper-btn btn-block"} >{this.props.item.name}</li>
      <button classname="paper paper-btn btn-success" onClick={() => { this.props.SwapUp(this.props.item) }}>Up</button>
      <button classname="paper paper-btn btn-warning" onClick={() => { this.props.SwapDown(this.props.item) }}>down</button>
      <button classname="paper paper-btn btn-danger" onClick={() => { this.props.Delete(this.props.item)}}>X</button>
    </div>
  }
}
export default App;
