import { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../App';

export default function Dashboard() {
    const navigate = useNavigate();
    const { setUser } = useContext<any>(UserContext);

    function onLogout(){
        localStorage.removeItem('user');
        setUser(null);
        navigate('/')
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-6 offset-md-3 mt-5">
                        <p>I am dashboard page and cannot be revealed to guest</p>
                        <button className="btn btn-link" onClick={onLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}