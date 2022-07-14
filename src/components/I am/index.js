import './styles.css';
import Lottie from 'react-lottie';
import code from '../../animation/rocket.json';

function Iam() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: code,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className='container-iam'  >



            <div className='container-code' style={{ justifyContent: 'space-between', display: 'flex', }}>
                <div>
                    <Lottie options={defaultOptions}
                        width={320}
                        height={320}
                    />
                </div>
                <div>

                    <span >Quem sou<span className='container-I' >.</span></span>
                    <p className='container-information'>Olá! Sou a Monique Araújo, tenho 24 anos. Estou cursando Análise e desenvolvimento de sistemas.
                        Apaixonada por tecnologia, atualmente estudo HTML, CSS, JavaScript, ReactJs e NodeJs, estou focada em front-end, mas, busco aprimorar meus conhecimentos constantemente, com o objetivo de me tornar uma desenvolvedora Full Stack.
                    </p>
                </div>


            </div>
        </div>
    )
}


export default Iam;