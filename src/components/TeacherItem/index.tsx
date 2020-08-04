import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/56259137?s=460&u=7e53ab0b5edbecb022fec2b1c7b9ba25170fca74&v=4" alt="" />
                <div>
                    <strong>tati alves</strong>
                    <span>Literatura</span>
                </div>
            </header>
            <p>Descrição</p>
            <footer>
                <p>
                    Preço/Hora
                <strong>R$ </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;