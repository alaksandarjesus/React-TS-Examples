import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext<any>(UserContext);

    function onLogin() {
        setUser('alaksandar')
        localStorage.setItem('user', 'alaksandar');
        navigate('/dashboard')
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-12 col-md-6 offset-md-3 mt-5">
                    <p>I am from login page</p>
                    <button className="btn btn-link" onClick={onLogin}>Set User</button>
                </div>
            </div>
        </div>
    )
}