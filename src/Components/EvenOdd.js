import react from "react";

// class EvenOdd extends react.Component{
//     render(){
//         var arr = [10, 30, 50, 55, 66, 77, 88]
//         var outPutEven = arr.filter(
//             x => x%2 === 0
//         )
//         var outPutOdd = arr.filter(
//             x => x % 2 === 1
//         )
//         return(
           
//             <>
//                 <div>Even Numbers = {outPutEven.join(",  ")}</div>
//                 <div>Odd Numbers = {outPutOdd.join(",  ")}</div></>
           
//         )
//     }
// }



//useEffect(() => {
  //Runs on every render
// });
// useEffect(() => {
    //Runs only on the first render
// }, []);


// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// function Timer() {
//     const [count, setCount] = useState(0);
//     const [increaseCount, setIncreaseCount] = useState(0)

//     useEffect(() => {
//        setIncreaseCount(() => count*2)
//     },[count]);

//     return (
//     <>
//         <h1>I've rendered {count} times!</h1>
//         <button onClick={() =>setCount((c) => c+1)}>+</button>
//         <p>{increaseCount}</p>
//     </>
//     )

// }




// function ShowHide(){
//     const [show,setShow] = react.useState(false)

//     return(
//         <>
//         {
//             show?<h1>Hello</h1>:null
//         }
//             {/* <button onClick={() =>setShow(true)}>Show</button>
//             <button onClick={() =>setShow(false)}>Hide</button> */}
//             <button onClick={() => setShow( !show )}>Toggle</button>
//         </>
       
//     )
// }
// class ShowHide extends react.Component{
//     state ={
//         visible : true
//     }
//     render(){
//         return(
//             <>
//             {
//                 this.state.visible ? <h1>h1</h1> :null
//             }
//                 <button onClick={() => { 
//                     this.setState({visible:true})
//                 } }>Show</button>
//                 <button onClick={() => {
//                     this.setState({ visible: false })
//                 }}>Hide</button>
//             </>
//         )
//     }
// }
// import Person from './Person'
// function ListOfArray(){
//     const list =["aaa","bbb"]
//     const names = [
//         {
//             name :"aaa",
//             age :"24",
//             sal :"20000"
//         },
//         {
//             name: "bbb",
//             age: "29",
//             sal: "30000"
//         }
//     ]
//     const nameList = list.map((lists,index) => <h3 key={index}>{index}{list}</h3>)
//     return(
//         <div>
//            {nameList}
//         </div>
        
//     )
// }

import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            comment : '',
            topic : 'React'
        }
        this.HandleEvent = this.HandleEvent.bind(this)
    }

    HandleEvent (event){
        this.setState({
            username: event.target.value
        })
    }
    HandleEventTextArea = (event) =>{
        this.setState({
            comment : event.target.value
        })
    }
    HandleEventSelect = event =>{
        this.setState({
            topic : event.target.value
        })
    }
    HandleEventSubmit = event =>{
        // alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        console.log(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        const {username,comment,topic} = this.state
        return (
            <form onSubmit={this.HandleEventSubmit}>
                <div>
                    <label>Name</label>
                   <input type="text" value={username} onChange={this.HandleEvent}/>
               </div>
               <div>
                   <label>Comments</label>
                    <textarea value={comment} onChange={this.HandleEventTextArea}></textarea>
               </div>
               <div>
                   <label>Topic</label>
                   <select value={topic} onChange={this.HandleEventSelect}>
                        <option value="React">React</option>
                        <option value="vue">vue</option>
                        <option value="angular">Angular</option>
                   </select>
                   <button type="submit">Submit</button>
               </div>
            </form>
        )
    }
}

export default Form

