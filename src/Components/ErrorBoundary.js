import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state={
            error: false,
            errorMsg: "",  
        }
    }

    componentDidCatch(error , info) {
        this.setState({
            error: true , 
            errorMsg: error
        })
    }

    render() {
     if (this.state.error) {
       return <h1>{this.state.errorMsg}</h1>
     }else{
        return this.props.children
     }
    }
}

export default ErrorBoundary;