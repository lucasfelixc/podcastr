import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from '@styles/components/Header'

export const Header: React.FC = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return(
    <Container>
      <img src="/logo.svg" alt="Podnow"/>

      <p>Divirta-se ouvindo o melhor conteúdo, sempre</p>

      <span>{currentDate}</span>
    </Container>
  )
}
