import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import "./styles.css";

import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '', from: '', to: ''}
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: '', from: '', to: '' }
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este fomulário de inscrição"></PageHeader>

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" type="text" label="Nome completo" />
          <Input name="avatar" type="text" label="Avatar" />
          <Input name="whatsapp" type="text" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />

        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciências', label: 'Ciências'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'História', label: 'História'},
              { value: 'Letras', label: 'Letras'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Música', label: 'Música'},
              { value: 'Português', label: 'Português'},
              { value: 'Programação', label: 'Programação'},
              { value: 'Química', label: 'Química'},
            ]}
          />
          <Input name="cost" type="text" label="Custo da sua hora por aula" />

        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da Semana"
                  options={[
                    { value: '0', label: 'Domingo'},
                    { value: '1', label: 'Segunda-Feira'},
                    { value: '2', label: 'Terça-Feira'},
                    { value: '3', label: 'Quarta-Feira'},
                    { value: '4', label: 'Quinta-Feira'},
                    { value: '5', label: 'Sexta-Feira'},
                    { value: '6', label: 'Sábado'},
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            )
          })}

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados.
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;
