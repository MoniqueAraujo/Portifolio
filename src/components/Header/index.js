import './styles.css';



function Header() {
    return (
        <header className="container-header" >
            <div className='header' >
                <span> {`${"< Monique Araujo />"}`} </span>
                <div>
                    <button className='btn'>Sobre mim</button>
                    <button className='btn'>Conhecimentos</button>
                    <button className='btn'>Projetos</button>
                    <button className='btn'>Contatos</button>
                </div>
            </div>
        </header>
    )
}
export default Header;