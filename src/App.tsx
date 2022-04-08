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
import { Card } from './components/Card'

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
    //step 1 - reset  game
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCardCount(0)

    //step 2  - create grid empty
    let tmpCardGrid: ICardItem[] = []
    for (let i = 0; i < (items.length * 2); i++) {
      tmpCardGrid.push({
        item: null,// create empty
        shown: true,//no show item
        permanentShow: false, // no show item permanent
      })
    }
    //step 2.1 -- fill the grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        //se nao tem pos entra se tem a mesma posição entra de novo
        while (pos < 0 || tmpCardGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));//random number 
        }
        tmpCardGrid[pos].item = i;
      }
    }//create grid 2 x items
    // console.table(tmpCardGrid)
    setCardsGrid(tmpCardGrid)
    //step 3 - start game
    setPlaying(true);
  }

  const handleShowItem = (id: number) => {

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
          {cardsGrid.map((item, index) => {
            return <Card key={index} data={item} onClick={() => handleShowItem(index)} />
          })}
        </Grid>
      </SectionGrid>
    </Container>
  )
}

export default App
