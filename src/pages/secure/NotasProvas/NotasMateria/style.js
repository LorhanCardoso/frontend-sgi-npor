import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: ${props => props.backgroundcolor};
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

