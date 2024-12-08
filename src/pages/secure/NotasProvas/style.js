import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ backgroundcolor }) => backgroundcolor || '#ffffff'};

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 576px) {
    padding: 5px;
  }
`;

export const ToggleContainer = styled.div`
  width: 100%;
  max-width: 300px;
  min-height: 40px;
  padding: 5px;
  display: flex;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 1025px) {
    max-width: 258px;
  }

  @media (max-width: 576px) {
    padding: 5px;
    max-width: 250px;
  }
`;

export const Botao = styled.button`
  border-radius: 70px;
  border: none;
  background-color: ${({ $isActive, theme }) => $isActive ? theme.color.secondary : theme.color.primary};
  width: 100%;
  height: 5vh;
  min-height: 40px;
  font-family: 'Poppins-Bold';
  font-size: 1.2rem;
  color: #ffffff;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
