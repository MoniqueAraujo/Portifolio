import './styles.css';

function Welcome() {
    return (
        <div className='container-apresentation'>
            <div className='container-name'>
                <span className='apresentation'>Olá, meu nome é</span>
                <div><span className='name-pink' style={{ color: '#F1889B' }}>Mon</span><span className='name-white' style={{ color: '#ffffff' }}>ique</span> <span className='name-pink' style={{ color: '#F1889B' }}>Ara</span><span className='name-white' style={{ color: '#ffffff' }}>ujo</span></div>
            </div>
        </div>

    )
}
export default Welcome;