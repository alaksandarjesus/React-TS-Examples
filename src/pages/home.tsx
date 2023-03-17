import React, {Component} from 'react';

interface AppProps {}
interface AppState {}


class Home extends Component<AppProps, AppState> {

    constructor(props:any){
        super(props);
    }

    render(): React.ReactNode {
        return <>
        <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-6 offset-md-3 mt-5">
                        I am home page
                    </div>
                    </div>
                    </div>
        </>
    }
}

export default Home;
