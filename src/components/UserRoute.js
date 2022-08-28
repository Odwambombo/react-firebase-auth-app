import {useSelector} from 'react-redux';
import Login from '../pages/Login';
import Home from '../pages/Home';

const UserRoute = ({children}) => {
    const {currentUser} = useSelector((state) => state.user);
    return currentUser ? <Home /> : <Login />;
};

export default UserRoute;