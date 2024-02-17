// App.tsx
import { GlobalCss, Container, Img, ContaineImg, Title } from './styles'

function App() {
  return (
    <Container>
      <GlobalCss />
      <div>
        <Title>Animation made only with CSS</Title>
      </div>
      <ContaineImg>
        <Img src="../images/pngegg.png" alt="" />
        <Img shadowColor="#42cce1" src="../images/vegeta.png" alt="" />
      </ContaineImg>
    </Container>
  )
}

export default App
