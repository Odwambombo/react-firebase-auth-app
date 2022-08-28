import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {logoutInitiate} from '../redux/actions';

const Home = () => {

    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();
   
    const handleAuth = () => {
        if(currentUser){
       dispatch(logoutInitiate());
        }
    }
    return <div>
    <h1>Welocome to our Site</h1>
    <hr />

    <button className='btn btn-danger' onClick={handleAuth}>Logout</button>

    </div>
}

export default Home;