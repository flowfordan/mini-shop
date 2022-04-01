import React from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";



export default class ErrorBoundary extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(){
        this.setState({hasError: true})
    }


    render(){

        if (this.state.hasError){
            return <ErrorIndicator />
        }
        
        return this.props.children;
    }
}