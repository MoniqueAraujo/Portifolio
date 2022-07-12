import './styles.css';



function Header() {
    return (
        <header className="container-header" >
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: '0 60px ' }}>
                <span> {`${"< Monique Araujo />"}`} </span>
                <ul style={{ height: '20px' }}>
                    <li>
                        <button className='btn'>Sobre mim</button>
                    </li>
                    <li>
                        <button className='btn'>Conhecimentos</button>
                    </li>
                    <li>
                        <button className='btn'>Projetos</button>
                    </li>
                    <li>
                        <button className='btn'>Contatos</button>
                    </li>
                </ul>

            </div>
        </header>
    )
}
export default Header;