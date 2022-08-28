import {useNavigate} from 'react-router-dom';

const LoadingToRedirect = () => {

    const navigate = useNavigate();
    navigate('/login');
    return;
}

export default LoadingToRedirect;