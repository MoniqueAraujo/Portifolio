import './styles.css';
import DropdownMobile from '../Dropdown';




function Header() {
    return (
        <header className="container-header" >
            <div className='header' >
                <span> {`${"< Monique Araujo />"}`} </span>

                <div className='container-div'>
                    <button className='btn' ><a style={{ color: 'inherit', textDecoration: 'none' }} href='#containerIam'>Sobre mim</a></button>
                    <button className='btn'><a style={{ color: 'inherit', textDecoration: 'none' }} href='#containerApprenticeship'>Conhecimentos</a></button>
                    <button className='btn'><a style={{ color: 'inherit', textDecoration: 'none' }} href="#cardProject">Projetos</a></button>
                    <button className='btn'><a style={{ color: 'inherit', textDecoration: 'none' }} href="#Contacts">Contatos</a></button>
                </div>
                <DropdownMobile className='dropdown' />

            </div>
        </header>
    )
}
export default Header;