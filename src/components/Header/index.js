import React from 'react';
import { Link } from 'gatsby';

import { Wrapper } from './styles';

const Header = () => (
    <Wrapper>
      <header>
        <Link to="#about-me" className="logo">
          <div className="logo__img" />
        </Link>
        <ul>
          <li><Link to="#skills">Habilidades</Link></li>
          <li><Link to="#libraries">Bibliotecas</Link></li>
          <li><Link to="#projects">Projetos</Link></li>
          <li><Link to="#timeline">Linha do tempo</Link></li>
          <li><Link to="#contact">Contato</Link></li>
        </ul>
      </header>
    </Wrapper>
  );

export default Header;
