import React, { Component } from 'react';
import Result from '../Result';
import './Calculator.css'

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstValue: '',
            secondValue: '',
            selectedOperator:'+',
            resultCalculation:''
        }
    }

    calculateResult = () => {
        if ((this.state.firstValue !== '') && (this.state.secondValue !== '')){
            this.setState({
                resultCalculation: eval(`${this.state.firstValue}${this.state.selectedOperator}${this.state.secondValue}`)
            })
        }
    }

    render() {
        console.log(`${this.state.firstValue}${this.state.selectedOperator}${this.state.secondValue}=${this.state.resultCalculation}`);
        return (
            <div className='calculator'>
                <h2>Caculation</h2>
                <div>
                    <div>
                        <label>Value 1</label>
                        <input onChange = {(firstInput) => this.setState({firstValue: firstInput.target.value})}></input>
                    </div>
                    <div>
                        <label>Operator</label>
                        <select onChange = {(selectedOperator) => this.setState({selectedOperator: selectedOperator.target.value})}>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">x</option>
                            <option value="/">:</option>
                        </select>
                    </div>
                    <div>
                        <label>Value 2</label>
                        <input onChange = {(secondInput) => this.setState({secondValue: secondInput.target.value})}></input>
                    </div>
                </div>
                <button onClick={this.calculateResult}>Calculate</button>
                <Result resultCalculation = {this.state.resultCalculation}/>
            </div>
        );
    }
}

export default Calculator;
