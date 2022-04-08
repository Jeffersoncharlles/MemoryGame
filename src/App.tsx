import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { InfoItem } from './components/InfoItem'
import { items } from './utils/items'
import { formatTimeElapsed } from './utils/formatTimeElapsed'
import { Card } from './components/Card'
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
  useEffect(() => {

    //step 1 - start time
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(time => time + 1)
      }
    }, 1000);
    return () => clearInterval(timer)
  }, [playing, timeElapsed]);

  useEffect(() => {
    //verify if opened are equal

    if (shownCardCount === 2) {
      let opened = cardsGrid.filter((open) => open.shown === true)
      if (opened.length === 2) {
        //step 1 - if both are equal , make every 'shown' permanent
        // se sao iguais tornar todos os permanent em true
        if (opened[0].item === opened[1].item) {
          let tmp = [...cardsGrid]
          for (let i in tmp) {
            if (tmp[i].shown) {
              tmp[i].permanentShow = true;
              tmp[i].shown = false
            }
          }
          setCardsGrid(tmp)
          setShownCardCount(0)

        } else {
          //step - if they are NOT equal , close all 'shown'
          //se eles nao sao iguais fechar todos
          setTimeout(() => {
            let tmp = [...cardsGrid]
            for (let i in tmp) {
              tmp[i].shown = false
            }
            setCardsGrid(tmp)
            setShownCardCount(0)
          }, 1000);
        }
        setMoveCount(moveCount => moveCount + 1)
      }
    }
  }, [shownCardCount, cardsGrid]);

  useEffect(() => {
    //verify if game is over
    if (moveCount > 0 && cardsGrid.every(i => i.permanentShow === true)) {
      setPlaying(false);
    }
  }, [moveCount, cardsGrid]);


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
        shown: false,//no show item
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
    }
    //create grid 2 x items
    setCardsGrid(tmpCardGrid)

    //step 3 - start game
    setPlaying(true);
  }

  const handleShowItem = (id: number) => {
    //compare true and id exists and shownCardCount < 2
    if (playing && id !== null && shownCardCount < 2) {
      let tmpGrid = [...cardsGrid]//clone

      //compare conditions false
      if (!tmpGrid[id].permanentShow && !tmpGrid[id].shown) {
        tmpGrid[id].shown = true;
        setShownCardCount(shownCardCount + 1)
      }
      setCardsGrid(tmpGrid)
    }
  }

  return (
    <Container>

      <Section>

        <LogoLink href=''>
          <span>MemoryGame</span>
        </LogoLink>

        <InfoContainer>
          <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label='Movimentos' value={String(moveCount)} />
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
