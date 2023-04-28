import { Component } from "react/cjs/react.production.min";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class ErrorBoundry extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }


    render(){
        if (this.state.error) {
            return <ErrorMessage />
        }

        return this.props.children;
    }
}

export default ErrorBoundry;