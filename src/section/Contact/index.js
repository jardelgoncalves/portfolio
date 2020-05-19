import React from 'react';
import { Fade } from 'react-reveal';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';

import { Input, Select, Textarea } from '../../components/Form';
import { RaisedButton, ExternalLink } from '../../components/Button';

import { Wrapper, Col } from './styles';

const options = [
  { label: '1 página', value: '1' },
  { label: '2 páginas', value: '2' },
  { label: '3 páginas', value: '3' },
  { label: '4 páginas', value: '4' },
  { label: '5 páginas', value: '5' },
  { label: '6 páginas', value: '6' },
  { label: '7 páginas', value: '7' },
  { label: '8 páginas', value: '8' },
  { label: '9 páginas', value: '9' },
  { label: '+10 páginas', value: '+10' },
];

const Projects = ({ id }) => (
  <Fade right>
    <Wrapper id={id}>
      <Col>
      <h1 className="title">
      TEM UMA IDEIA E DESEJA TIRAR DO PAPEL? ENTRE EM CONTATO
      </h1>

      <form>
        <Input placeholder="Seu nome" className="input-data" />
        <Input placeholder="Email para contato" className="input-data" />
        <Select
          placeholder="Quantidade de páginas"
          className="input-data"
          options={options}
        />
        <Textarea
          placeholder="Breve descrição do projeto"
          className="input-data"
        />
        <div className="container__button">
          <RaisedButton text="Enviar" type="submit" />
        </div>
      </form>
      </Col>
      <Col className="other">
        <div className="other__contacts">
          <h1 className="title">Contato</h1>
          <ul>
            <li>
              <ExternalLink
                text={(
                  <>
                    <AiOutlineLinkedin />
                    <span>/jardelgoncalves</span>
                  </>
                )}
                to="https://linkedin.com/in/jardelgoncalves"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>
            <li>
              <ExternalLink
                text={(
                  <>
                    <AiOutlineGithub />
                    <span>/jardelgoncalves</span>
                  </>
                )}
                to="https://github.com/jardelgoncalves"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>
            <li>
              <ExternalLink
                text={(
                  <>
                    <AiOutlineMail />
                    <span>jardelgoncalves1996@gmail.com</span>
                  </>
                )}
                to="mailto:jardelgoncalves1996@gmail.com"
              />
            </li>
          </ul>
        </div>
      </Col>
    </Wrapper>
  </Fade>
);

export default Projects;
