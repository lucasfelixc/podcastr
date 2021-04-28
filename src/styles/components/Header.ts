import styled from "styled-components";

export const Container = styled.header`
  background: ${props => props.theme.colors.white};
  height: 6.5rem;

  display: flex;
  align-items: center;

  padding: 2rem 4rem;

  border-bottom: 1px solid ${props => props.theme.colors.gray100};

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;

    border-left: 1px solid ${props => props.theme.colors.gray100};
  }

  span {
    margin-left: auto;
    text-transform: capitalize; // Deixar todas as letras iniciais das palavras em maiúsculo.
  }
`
