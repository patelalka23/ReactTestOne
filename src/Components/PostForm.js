import React, { Component } from 'react'
import axios from 'axios'
 

export class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            title: '',
            body: ''
        }
        
    }

    HandleEvent = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    // HandleEventTextArea = (event) => {
    //     this.setState({
    //         comment: event.target.value
    //     })
    // }
    // HandleEventSelect = event => {
    //     this.setState({
    //         topic: event.target.value
    //     })
    // }
    HandleEventSubmit = event => {
        console.log(`${this.state.userid} ${this.state.title} ${this.state.body}`)
        console.log(this.state)
        event.preventDefault()
        axios.post(`https://jsonplaceholder.typicode.com/posts`,this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { userid, title, body } = this.state
        return (
            <form onSubmit={this.HandleEventSubmit}>
                <div>
                    <label>User Id</label>
                    <input type="text" name="userid" value={userid} onChange={this.HandleEvent} />
                </div>
                <div>
                    <label>Title</label>
                    <input value={title} name="title" onChange={this.HandleEvent}></input>
                </div>
                <div>
                    <label>Body</label>
                    <input name="body" value={body} onChange={this.HandleEvent}>  
                    </input>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default PostForm

