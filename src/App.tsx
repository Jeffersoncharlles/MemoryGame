import { useState } from 'react'
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
          ...
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
