/* eslint-disable indent */

import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import Link from '../Link';

export default function Menu({ onCadastrarClick }) {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas Frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/about',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Link variant="smallestException" href={link.url}>
              {link.texto}
            </Link>
          </li>
          ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
