import {
  Container,
  EmptyPlayer,
  Progress,
  Buttons
} from '@styles/components/Player'

export const Player: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      <EmptyPlayer>
        <strong>Selecione um podcast para ouvir</strong>
      </EmptyPlayer>

      <footer className="empty">
        <Progress>
          <span>00:00</span>

          <div className="slider">
            <div className="emptySlider" />
          </div>

          <span>00:00</span>
        </Progress>

        <Buttons>
          <button type="button">
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>

          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>

          <button type="button" className="playButton">
            <img src="/play.svg" alt="Tocar"/>
          </button>

          <button type="button">
            <img src="/play-next.svg" alt="Tocar próxima"/>
          </button>

          <button type="button">
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </Buttons>
      </footer>
    </Container>
  )
}
