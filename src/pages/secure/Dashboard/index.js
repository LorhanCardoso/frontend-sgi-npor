import React, { useState } from 'react';
import * as S from './style';

import Header from '../../../components/Header';
import NotasProvas from '../NotasProvas/index';
import FatosObservados from '../FatosObservados/index';
import Administrador from '../Administrador/index';

const Dashboard = (props) => {
    const [activeComponent, setActiveComponent] = useState('NotasProvas');

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'NotasProvas':
                return <NotasProvas />;
            case 'FatosObservados':
                return <FatosObservados />;
            case 'Administrador':
                return <Administrador />;
            default:
                return <NotasProvas />;
        }
    };

    return (
        <>
            <Header onComponentChange={handleComponentChange} />
            <S.BoxContainer $padding="6px">
                {renderActiveComponent()}
            </S.BoxContainer>
        </>
    );
};

export default Dashboard;
