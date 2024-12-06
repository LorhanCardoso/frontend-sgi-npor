import React from "react";
import * as S from './style';
import images from '../../assets/iconsNotas';

const BoxNotas = ({ titulo, img, ac_co, onButtonClick }) => {
  return (
    <S.Container>
      <S.BoxContainer $backgroundcolor="none" $padding='5px'>
        <S.Text>{titulo}</S.Text>
        <img src={images[img]} alt={titulo} width={200} />
      </S.BoxContainer>

      <S.BoxContainer $gap="10px" $borderradius="30px" $padding="10px">
        {ac_co ? (
          <>
            <S.Botao onClick={() => onButtonClick('Acompanhamento')}>Acompanhamento</S.Botao>
            <S.Botao onClick={() => onButtonClick('Controle')}>Controle</S.Botao>
          </>
        ) : (
          <S.Botao onClick={() => onButtonClick('Abrir')}>Abrir</S.Botao>
        )}
      </S.BoxContainer>
    </S.Container>
  );
};

export default BoxNotas;
