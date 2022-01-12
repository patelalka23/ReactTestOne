

import React, { Component } from 'react'

export class InpurValueLog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : ''
        }
    }
    
    storeValue = (e) =>{
        
        this.setState({
            name: e.target.value
        })

    }

    submitHandler = e =>{
        e.preventDefault()
        
        console.log(`Name ${this.state.name}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Name</label>
                    <input type='text' value={this.state.name} onChange={this.storeValue}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default InpurValueLog
