import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://i.pravatar.cc/300?u=a042581f4e290267dd2" alt="Avatar"/>
        <div>
          <strong>Nome Professor</strong>
          <span>Matéria do Professor</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea aliquam dolorum obcaecati quia exercitationem molestias odit ipsum delectus minus minima deserunt facilis, debitis velit sint beatae corporis perferendis voluptates. Ut molestiae libero sequi adipisci quisquam enim expedita provident necessitatibus?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt=""/> Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;