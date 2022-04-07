import { useState } from 'react'
import { InfoItem } from './components/InfoItem'
import {
  Container,
  Section,
  SectionGrid,
  LogoLink,
  InfoContainer
} from './styles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Section>
        <LogoLink href=''>
          <span>MemoryGame</span>
        </LogoLink>
        <InfoContainer>
          <InfoItem label='Tempo' value='00:00' />
          <InfoItem label='Movimentos' value='0' />
        </InfoContainer>
        <button>Reiniciar</button>
      </Section>
      <SectionGrid>
        ...
      </SectionGrid>
    </Container>
  )
}

export default App
