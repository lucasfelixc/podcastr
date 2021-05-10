import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;
`

export const LatestEpisodes = styled.section`
  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    li {
      background: ${props => props.theme.colors.white};
      border: ${props => props.theme.colors.gray100};
      padding: 1.25rem;
      border-radius: 1.5rem;
      position: relative;
      display: flex;
      align-items: center;

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
      }
    }
  }
`

export const AllEpisodes = styled.section`

`

export const EpisodesDetails = styled.div`
  flex: 1;
  margin-left: 1rem;

  a {
    display: block;
    color: ${props => props.theme.colors.gray800};
    font-family: Lexend, sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    /* font-size: 0.075rem;
    margin-top: 0.5rem; */
    /* max-width: 70%; */
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
    // Colocar as reticências quando for alcançado o tamanho máximo.
  }
`

export const PlayEpisode = styled.button``
