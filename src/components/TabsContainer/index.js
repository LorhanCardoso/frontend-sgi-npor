import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Table from '../Table';
import columns from '../ColumsTabela/columnsNotaFinal';
import data from '../../data/dadosNotaFinal';
import styled from 'styled-components';

// Estilização
export const BoxContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;

    &.boxTabela {
        margin-top: 0.5%;
        height: 68vh;
        border: 1px solid ${(props) => props.theme.color.primary};
        border-radius: 15px;
        padding: 10px;
    }
`;

export const TabsStyled = styled(Tabs)`
    width: 95%;
    font-family: ${(props) => props.theme.font.title};
    font-size: 10px;
    
    .react-tabs__tab-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        padding-left: 25px;
        margin: 0;
        list-style: none;
        border-bottom: none;
        justify-content: center;
    }

    .react-tabs__tab {
        padding: 10px 15px;
        cursor: pointer;
        background-color: #f1eded;
        color: ${(props) => props.theme.color.primary};
        margin: 5px; 
        transition: all 0.3s ease;
        border-radius: 30px;


        &:hover {
            background-color: #e2e2e2;
        }
    }

    .react-tabs__tab--selected {
        background-color: ${(props) => props.theme.color.primary};
        color: white;
        width: auto;
        display: flex;
        justify-content: center;
        border-radius: 30px;
    }

    /* Ajustes para telas menores */
    @media (max-width: 768px) {
        font-size: 8px;
        .react-tabs__tab {
            padding: 8px 12px;
        }
    }

    @media (max-width: 480px) {
        font-size: 7px;
        .react-tabs__tab {
            padding: 6px 10px;
            margin: 3px;
        }
    }
`;


export const TabPanelStyled = styled(TabPanel)`
`

// Dados para as abas e tabelas
const tabData = [
    { name: "Nota Final", data: data, columns: columns },
    { name: "IG", data: data, columns: columns },
    { name: "Fuzil", data: data, columns: columns },
    { name: "Pistola", data: data, columns: columns },
    { name: "Comunicações", data: data, columns: columns },
    { name: "Topografia", data: data, columns: columns },
    { name: "CSC1", data: data, columns: columns },
    { name: "Explosivo Militar", data: data, columns: columns },
    { name: "TAF", data: data, columns: columns },
    { name: "História Militar", data: data, columns: columns },
    { name: "CSC2", data: data, columns: columns },
    { name: "Patrulha 2", data: data, columns: columns },
    { name: "Oe Inf", data: data, columns: columns },
];

const TabsContainer = () => {
    return (
        <TabsStyled>
            {/* Gerar dinamicamente as abas */}
            <TabList>
                {tabData.map((tab, index) => (
                    <Tab key={index}>{tab.name}</Tab>
                ))}
            </TabList>

            {/* Gerar dinamicamente os painéis */}
            {tabData.map((tab, index) => (
                <TabPanelStyled key={index}>
                    <BoxContainer className='boxTabela'>
                        <Table
                            data={tab.data}
                            columns={tab.columns}
                            onRowClick={() => ""}
                        />
                    </BoxContainer>
                </TabPanelStyled>
            ))}
        </TabsStyled>
    );
};

export default TabsContainer;
