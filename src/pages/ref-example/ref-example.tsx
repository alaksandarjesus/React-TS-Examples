// example of using ref as class component
// cannot use useRef Hook. use createRef hook instead

import React, { Component, useState, useRef, createRef } from 'react';
import { Link } from "react-router-dom";

interface AppState {
    passwordVisible: boolean,
    inputPassword:any
}
interface AppProps {
 
}


class RefExample extends Component<AppProps, AppState> {

 
    constructor(props: any) {
        super(props);
        this.onTogglePassword = this.onTogglePassword.bind(this);
        this.state = {
            passwordVisible: false,
            inputPassword:createRef()
        }
    }

    onTogglePassword() {
        this.setState({
            passwordVisible: !this.state.passwordVisible
        }, ()=>{
            if(this.state.passwordVisible){
                this.state.inputPassword.current.setAttribute('type', 'text')
            }else{
                this.state.inputPassword.current.setAttribute('type', 'password')
            }
        })
       
    }

    render() {
        const {passwordVisible, inputPassword} = this.state;
        return <>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-6 offset-md-3 mt-5">
                        <form >
                            <div className="input-group mb-3">
                                <input type="password" ref={inputPassword} className="form-control" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="button-addon2" autoComplete='current-password' />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.onTogglePassword}>
                                    <i className="material-icons">{passwordVisible?'visibility':'visibility_off'}</i>
                                    
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}

export default RefExample