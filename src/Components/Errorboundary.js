import React,{Component} from "react";

class Errorboundary extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
    render(){
        const {hasError}= this.state
      return hasError? <h1 style={{color:'white'}}>Opps sorry something went wrong.</h1>: (this.props.children)
    }
}

export default Errorboundary;