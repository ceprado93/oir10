import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import logoLigth from '../../assets/LogoOscuro.svg'
import logoDark from '../../assets/LogoClaro.svg'

const Home = ({start}) => {

    const [blueNem, setBlueNem] = useState(false)
    const [blueAcc, setBlueAcc] = useState(false)
    const [blueSup, setBlueSup] = useState(false)
    const [blueCon, setBlueCon] = useState(false)
    const [blueAb, setBlueAb] = useState(false)

    return (
        <section>
            {start
                ?
                <div className="homePage">
                    <img src={logoLigth} alt='logo' />
                    <ul>
                        <li><Link className={blueNem ? "navigation navNemeson" : "navigation"} to="/nemeson" onMouseEnter={() => setBlueNem(true)} onMouseLeave={() => setBlueNem(false)}>Nemeson</Link></li>
                        <li><Link className={blueAcc ? "navigation navNemeson" : "navigation"} to="/accesorios" onMouseEnter={() => setBlueAcc(true)} onMouseLeave={() => setBlueAcc(false)}>Accesorios</Link></li>
                        <li><Link className={blueSup ? "navigation navNemeson" : "navigation"} to="/soporte" onMouseEnter={() => setBlueSup(true)} onMouseLeave={() => setBlueSup(false)}>Soporte técnico</Link></li>
                        <li><Link className={blueCon ? "navigation navNemeson" : "navigation"} to="/contacto" onMouseEnter={() => setBlueCon(true)} onMouseLeave={() => setBlueCon(false)}>Contacto</Link></li>
                        <li><Link className={blueAb ? "navigation navNemeson" : "navigation"} to="/sobre-nosotros" onMouseEnter={() => setBlueAb(true)} onMouseLeave={() => setBlueAb(false)}>Sobre nosotros</Link></li>
                    </ul>
                </div>
                :
                <div className="start">
                    <img src={logoDark} alt='logo' />
                </div>
            }
        </section >
    )
}

export default Home