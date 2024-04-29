import { Landing } from '../styled/Landing.styled';
import logo from '../assets/logo.png';

function HomePage() {
    return (
        <Landing>
            <img src={logo} alt='Where its at logo'/>
            <h1>Where It’s @</h1>
            <h2>Ticketing made easy</h2>
        </Landing>
    )
}

export default HomePage