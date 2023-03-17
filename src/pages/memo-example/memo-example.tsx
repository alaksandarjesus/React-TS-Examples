import { useState, useMemo } from 'react';
import Message from "./message";

function MemoExample() {

    let [count, setCount] = useState(0);
    let [msg, setMsg] = useState('Good Day');
    let [dummyVariable, setDummyVariable] = useState('');

    // const complexOutput = useMemo(()=>{
    //     return complexFunction(count)
    //   },[count])
    
      const complexOutput = complexFunction(count);

    function updateCount(){
        setCount((c) => c + 1);
    }

    function updateMessage(){
        setMsg('Good Bye')
    }
    function resetMessage(){
        setMsg('Good Day')
    }

    function updateDummyVariable(){
        let randomString = (Math.random() + 1).toString(36).substring(7);
        setDummyVariable(randomString)
    }

    function complexFunction(end:any) {
        console.log("complex function is called")
         let val = 0;
         for (let i = 0; i <= end; i++) {
           val = val + i;
         }
         return val;
       }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-lg-6 offset-lg-3 mt-5">
                        <div className="row">
                            <div className="col-12">
                                <p>Memo Example</p>
                                <p>Current State Value of Count = {count}</p>
                                <p>Complex Output: {complexOutput}</p>
                                <p>Dummy Variable Output: {dummyVariable}</p>
                            </div>
                            <div className="col-12">
                                <Message msg={msg} />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" onClick={updateCount}>Update Count</button>
                                <button className="btn btn-warning" onClick={updateDummyVariable}>Update Dummy Variable</button>
                            </div>
                            <div className="col-12">
                                <h4>Case 1</h4>
                                <p>Updating the count which is a state value for MemoExample component, updates the props for Message component, and rerenders the component.</p>
                                <p>Toggle comment <code>export default memo(Message)</code> from Message.tsx</p>
                                <p>Using memo on the export, will rerender the component only if the props is changed</p>
                                <p>This can be visualized by the useEffect hook console.log in Message component</p>
                                <p><button className="btn btn-link" onClick={updateMessage}>Click to update message props</button></p>
                                <p><button className="btn btn-link" onClick={resetMessage}>Click to reset message props</button></p>
                            </div>
                            <div className="col-12">
                                <h4>Case 2</h4>
                                <p>Updating dummy variable state, will call complex function, which is not required</p>
                                <p>Wrapping complex output with useMemo will avoid multiple rendering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default MemoExample;