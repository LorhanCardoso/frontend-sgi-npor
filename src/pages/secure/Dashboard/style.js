import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.backgroundcolor || props.theme.color.primary};

    @media (max-width: 768px) {
    }

    @media (max-width: 576px) {
    }
`;

export const BoxContainer = styled.div`
    height: ${props => props.$height || '100%'};
    width: ${props => props.$width || '100%'};
    background-color: ${props => props.$backgroundcolor || ''};
    display: flex;
    align-items: ${props => props.$alignitems || 'center'};
    justify-content: ${props => props.$justifycontent || 'center'};
    gap: ${props => props.$gap || ''};
    flex: ${props => props.$flex || '1'}; 
    padding: ${props => props.$padding || ''};

    @media (max-width: 768px) {
    }

    @media (max-width: 576px) {
    }
`;
