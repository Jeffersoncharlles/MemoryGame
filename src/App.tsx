import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { InfoItem } from './components/InfoItem'
import { items } from './utils/items'
import {
  Container,
  Section,
  SectionGrid,
  LogoLink,
  InfoContainer,
  Grid
} from './styles'

interface ICardItem {
  item: number | null;
  shown: boolean;
  permanentShow: boolean;
}


function App() {
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [shownCardCount, setShownCardCount] = useState<number>(0)
  const [cardsGrid, setCardsGrid] = useState<ICardItem[]>([])

  useEffect(() => handleResetCreateGrid(), [])

  const handleResetCreateGrid = () => {

  }

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
        <Button title="Reiniciar" onClick={handleResetCreateGrid} />
      </Section>
      <SectionGrid>
        <Grid>

        </Grid>
      </SectionGrid>
    </Container>
  )
}

export default App
