import './styles.css';
import Lottie from 'react-lottie';
import woman from '../../animation/woman.json'

function Welcome() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: woman,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='container-apresentation'>
            <div className='container-name'>
                <span className='apresentation'>Olá, meu nome é</span>
                <div><span className='name-pink' style={{ color: '#F1889B' }}>Mon</span><span className='name-white' style={{ color: '#ffffff' }}>ique</span> <span className='name-pink' style={{ color: '#F1889B' }}>Ara</span><span className='name-white' style={{ color: '#ffffff' }}>ujo</span></div>
            </div>
            <div>
                <Lottie options={defaultOptions}
                    width={423}
                    height={276}

                />
            </div>

        </div>

    )
}
export default Welcome;