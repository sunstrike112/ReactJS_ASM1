import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <p>
                Result : <span>{this.props.resultCalculation}</span>
            </p>
        );
    }
}

export default Result;
