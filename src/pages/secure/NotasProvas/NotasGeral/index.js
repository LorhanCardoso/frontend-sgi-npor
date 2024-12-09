import React from 'react';
import * as S from './style';

import { FcPrint, 
    FcComboChart, 
    FcGenericSortingAsc, 
    FcGenericSortingDesc 
} from "react-icons/fc";

import TabsContainer from '../../../../components/TabsContainer';

const NotasGeral = (props) => {
    
    const BotaoAcao = ({ width, icon: Icon, texto }) => (
        <S.Botao width={width}>
          <Icon size={15} />
          {texto}
        </S.Botao>
      );

    return (
       <S.Container>
            <TabsContainer />
            <S.BoxContainer className='boxOrdenar'>
                <S.Text color="white">Ordernar</S.Text>
                <S.BoxContainer className='botoesOrdenar'>
                    <BotaoAcao icon={FcComboChart} texto="Padrão" />
                    <BotaoAcao icon={FcGenericSortingDesc} texto="Maiores" />
                    <BotaoAcao icon={FcGenericSortingAsc} texto="Menores" />
                </S.BoxContainer>
                <BotaoAcao width="30%" icon={FcPrint} texto="Imprimir" />
            </S.BoxContainer>
       </S.Container>
    );
};

export default NotasGeral;
