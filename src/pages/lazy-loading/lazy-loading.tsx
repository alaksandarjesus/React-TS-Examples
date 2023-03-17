import React, { Component, useState, useRef, Suspense } from 'react';
import { Link } from "react-router-dom";
// const TodosComponent = React.lazy(() => import('./todos'));
const TodosComponent = React.lazy(() => {
    return new Promise((resolve:any, reject) =>{
        setTimeout(() => {
            resolve(import('./todos'))
        }, 5000)
       
    })
});

export function LazyLoading() {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-6 offset-md-3 mt-5">
                        Lazy Loading component is rendered
                        <Suspense fallback={<div>Loading From Suspense Fallback...</div>}>
                            <TodosComponent />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    )
}