
import {useEffect, memo} from 'react';

function Message({msg}:{msg:any}){

    useEffect(()=>{
        console.log("i am called from message")
      })

    return(
        <>
         <h1>Hello {msg}</h1>
        </>
    )

}

// export default Message;
export default memo(Message);