import React, { Component } from 'react';
import Calculator from '../Calculator';
import './SignIn.css'

class SignIn extends Component {
    constructor(pros){
        super(pros)
        this.state = {
            userName: '',
            passWord: '',
            isLogIn: false
        }
    }

    //Check correct Username and Passowrd are 'admin'
    verifyInputs = () => {
        if ((this.state.userName !== '') && (this.state.passWord !== '')){
            if ((this.state.userName === 'admin') && 
                this.state.passWord === 'admin'){
                return true
            } else {
                return false
            }
        }
        return false
    }
    
    //Check button LogIn clicked
    handleLogIn = () => {
        if (this.verifyInputs() === true) {
            if (this.state.isLogIn === false) {
                this.setState ({
                    isLogIn: true
                })
            }   
        } else {
            this.setState ({
                isLogIn: false
            })
        }
    }

    render() {
        console.log(`${this.state.userName} ${this.state.passWord}`)
        console.log(`${this.verifyInputs()} ${this.state.isLogIn}`)
        return (
            <div className='signin'>  
                <div>
                    <div>
                        <label>Username</label>
                        <input onChange={(inputUsername) => this.setState({userName: inputUsername.target.value})}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input onChange={(inputPassword) => this.setState({passWord: inputPassword.target.value})}/>
                    </div>
                    <div>
                        <button onClick={this.handleLogIn}>Log In</button>
                        {/* Render notify success or warning for user */}
                        {
                            this.state.isLogIn ?
                                <div className="notify-success">Login successful</div>
                            :
                                <div className="warning">Please enter correct username and password</div>
                        }
                    </div>
                </div>
                {/* Render Calculator component after user enter correct username and password are 'admin' and click button Log In*/}
                {
                    this.state.isLogIn === true ?
                    <Calculator/>
                :
                    <div></div>
                }
            </div>
        )
    }
}
export default SignIn;
