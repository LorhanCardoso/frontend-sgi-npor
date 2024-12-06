// src/components/NotasMateria/index.js
import React, { useState } from 'react';
import * as S from './style';
import BoxNotas from '../../../../components/BoxNotas/index';
import NotasIndividual from '../NotasMateria/NotaIndividual';
import notasData from '../../../../assets/notas.json';

const NotasMateria = () => {
  const [selectedNota, setSelectedNota] = useState(null);

  // Função para atualizar o estado com a nota e tipo selecionado
  const handleNotaClick = ( titulo, img, ac_co, tipo, id ) => {
    setSelectedNota({ titulo, img, ac_co, tipo, id });
  };

  const handleBack = () => {
    setSelectedNota(null);
  };

  return (
    <S.Container>
      {selectedNota ? (
        <NotasIndividual 
          titulo={selectedNota.titulo} 
          img={selectedNota.img} 
          ac_co={selectedNota.ac_co}
          tipo={selectedNota.tipo}
          materiaId={selectedNota.id}
          onBack={handleBack}
        />
      ) : (
        notasData.map((nota, index) => (
          <BoxNotas 
            key={index} 
            titulo={nota.titulo} 
            img={nota.img} 
            ac_co={nota.ac_co} 
            onButtonClick={(tipo) => handleNotaClick( nota.titulo, nota.img, nota.ac_co, tipo, nota.id )}
          />
        ))
      )}
    </S.Container>
  );
};

export default NotasMateria;
