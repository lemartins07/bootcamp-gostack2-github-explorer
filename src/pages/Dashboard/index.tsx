import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/40571653?s=460&u=8d3dd470a1946ccb9d10da12044b1f9ea0d67554&v=4"
            alt="Leandro Martins"
          />
          <div>
            <strong>Teste</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/40571653?s=460&u=8d3dd470a1946ccb9d10da12044b1f9ea0d67554&v=4"
            alt="Leandro Martins"
          />
          <div>
            <strong>Teste</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/40571653?s=460&u=8d3dd470a1946ccb9d10da12044b1f9ea0d67554&v=4"
            alt="Leandro Martins"
          />
          <div>
            <strong>Teste</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
