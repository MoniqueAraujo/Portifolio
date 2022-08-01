import './styles.css';
import linkedin from '../../assets/svg/linkedin.svg';
import vectorgithub from '../../assets/svg/vectorgithub.svg';
import email from '../../assets/svg/email.svg';

function Contacts() {
    return (
        <div id='Contacts' className="container-contacts">
            <div >
                <span >Contatos<span style={{ color: '#F1889B' }}>.</span></span>
            </div>

            <div className="wrapper-contacts">
                <a href='mailto:moniquemedeeiros@outlook.com' target='_blank' rel="noreferrer" >
                    <img src={email} alt="email" />
                </a>
                <a href='https://www.linkedin.com/in/monique-ara%C3%BAjo-612946236' target='_blank' rel="noreferrer" >
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href='https://github.com//moniquearaujo' target='_blank' rel="noreferrer">
                    <img src={vectorgithub} alt="github" />
                </a>

            </div>
        </div>
    )
}

export default Contacts;