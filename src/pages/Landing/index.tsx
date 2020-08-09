import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        }) 
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logo da Proffy escrito em branco" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg} alt="" className="hero-image" />

               <div className="buttons-container">
                    <Link to="/estudar" className="study">
                        <img src={studyIcon} alt="Ícone de um livro aberto em branco" />
                        Estudar
                    </Link>
                    <Link to="/dar-aulas" className="give-classes">
                        <img src={giveClassesIcon} alt="Ícone de uma tela de projeção em branco" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Pequeno ícone de um coração na cor roxa" />
                </span>
            </div>
        </div>
    );
}

export default Landing;
