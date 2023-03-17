// example of using ref as functional component

import React, { Component, useState, useRef } from 'react';
import { Link } from "react-router-dom";


export default function RefExample() {

    const inputPassword: any = useRef();
    const [passwordVisible, setPasswordVisible] = useState(false);

    function onTogglePassword() {
        if (passwordVisible) {
            inputPassword.current.setAttribute('type', 'password');
        } else {
            inputPassword.current.setAttribute('type', 'text');
        }
        setPasswordVisible(!passwordVisible);

    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-6 offset-md-3 mt-5">
                        <form >
                            <div className="form-group mb-3">
                                <label className="form-label">Controlled by ref</label>
                                <div className="input-group ">
                                    <input type="password" ref={inputPassword} className="form-control" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onTogglePassword}>
                                        <i className="material-icons">{passwordVisible ? 'visibility' : 'visibility_off'}</i>
                                    </button>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Controlled by state</label>
                                <div className="input-group ">
                                    <input type={passwordVisible ? 'text' : 'password'} className="form-control" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onTogglePassword}>
                                        <i className="material-icons">{passwordVisible ? 'visibility' : 'visibility_off'}</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
