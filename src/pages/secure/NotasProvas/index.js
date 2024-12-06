import React, { useState } from 'react';
import * as S from './style';
import NotasMateria from './NotasMateria/index';
import NotasGeral from './NotasGeral/index';


const NotasProvas = () => {
  const [activeButton, setActiveButton] = useState("notasMateria");

  const handleToggle = (event) => setActiveButton(event.target.getAttribute('data-id'));

  return (
    <S.Container>
      <S.ToggleContainer>
        <S.Botao
          $isActive={activeButton === "notasMateria"}
          onClick={handleToggle}
          data-id="notasMateria"
        >
          Notas por Matéria
        </S.Botao>
        <S.Botao
          $isActive={activeButton === "notasGeral"}
          onClick={handleToggle}
          data-id="notasGeral"
        >
          Notas Geral
        </S.Botao>
      </S.ToggleContainer>
      {activeButton === "notasMateria" ? <NotasMateria /> : <NotasGeral />}
    </S.Container>
  );
};

export default NotasProvas;
