import styled from "styled-components";

export const Container = styled.div`
  width: 26.5rem;
  height: 100vh;

  padding: 3rem 4rem;

  background: ${props => props.theme.colors.purple500};
  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  footer {
    align-self: stretch;

    &.empty {
      opacity: 0.5;
    }
  }
`

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;

  border: 1.5px dashed ${props => props.theme.colors.purple300};
  border-radius: 1.5rem;

  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }

  .slider {
    flex: 1;

    .emptySlider {
      width: 100%;
      height: 4px;
      background: ${props => props.theme.colors.purple300};
      border-radius: 2px;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;

    &.playButton {
      width: 4rem;
      height: 4rem;

      border-radius: 1rem;

      background: ${props => props.theme.colors.purple400};
    }
  }
`
