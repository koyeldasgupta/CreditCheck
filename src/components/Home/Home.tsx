import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    let navigate = useNavigate();

    const handleCheckEligibility = (): void => {
        navigate('/credit-check');
    };

    return (
        <div className='home-container'>
            <div className='home-banner'>
               <div className='home-banner-content'>
                    <div className='home-banner-content--tilte'>
                        <h1>Find the right credit card for you</h1>
                    </div>
                    <button className='action-btn home-banner-content--button' onClick={handleCheckEligibility}>Check My Eligibility</button>
                    <ul>
                        <li>Get your free credit report</li>
                        <li>No harm to your credit rating</li>
                        <li>See your best offers</li>
                        <li>Free forever</li>
                    </ul>
               </div>
            </div>
        </div>

    );
}

export  default Home;