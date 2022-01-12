import React, { useState } from 'react'

function Counter(){
    const initCount = 0
    const [count,setCount] = useState(initCount)

    // incrementCount = () =>{
    //     setCount(count+1)
    // }
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => {setCount(prevCount => prevCount+1)}}>Increase Count</button>
            <button onClick={() => { setCount(prevCount => prevCount - 1) }}>Descrease Count</button>
            <button onClick={() => { setCount(prevCount => prevCount + 5)}}>increment by 5</button>
            <button onClick={() => { setCount(initCount)}}>Reset Count</button>

        </div>
    )
}

export default Counter




// class counter extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count:0

//         }
//     }
//     Increase(){
//         this.setState({
//             count : this.state.count + 1
//         }, () => {
//             console.log(this.state.count + "callback")
//         })
//         this.setState((prevState) =>({
//           count : prevState.count +1
//       }),() => {
//           console.log(this.state.count)
//       })
//         console.log(this.state.count)
//     }
//     render() {
//         return (
//             <div>
//                 <div>{this.state.count}</div>
//                 <button onClick={() => this.Increase()}>Increse</button>
//             </div>
//         )
//     }
// }

// class Comps extends Component {

//     constructor() {
//         super()
//         this.state = {
//             val: ''
//         }
//     }

    // HandleEvent(event) {
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

//     clickedHandler = (e) => {
//         e.preventDefault()
//         this.setState ({
//             val : e.target.value
//         })
//         console.log(this.state.val)
//     }


    
//     render() {
//         return (
//             <form onSubmit={this.clickedHandler}>
//                 <input type="text" value={this.val} />
//                 <button>Submit/</button>
//             </form>
           
//         )
//     }
    
// }

// export default Comps
