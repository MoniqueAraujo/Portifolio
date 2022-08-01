import './styles.css';
import { cards } from '../constantsCards';
import logo from '../../assets/svg/github.svg';

function Cards() {
    return (
        <div id='cardProject' className='container-span'>
            <span className='span-project' >Projetos</span><span style={{ color: '#F1889B' }}>.</span>
            <div className='cards' >
                {cards.map(card => {
                    return (
                        <div className='card' style={{ backgroundColor: '#202020', borderRadius: 4, height: 400, width: 285, padding: 10 }} >
                            <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <img style={{ width: '100%', height: 184, justifyContent: 'space-between', minHeight: '184px' }} src={card.imageUrl} alt='cards.' />
                                <span className='card-title'>{card.title}</span>
                                <p className='card-description' style={{ textAlign: 'left', height: '100%' }}>{card.description}</p>
                                <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <a href={card.projectUrl} target="_blank" className='btn-card' style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', color: 'inherit', }} rel="noreferrer">View Live</a>

                                    </div>
                                    <div>
                                        <a href={card.githubUrl} target="_blank" className='btn-logo' style={{ border: 'none', background: '#202020', }} rel="noreferrer">
                                            <img src={logo} alt='logo' />

                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                })}

            </div >

        </div >
    )
};
export default Cards;