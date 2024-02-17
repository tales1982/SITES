import styled, { keyframes } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const Cores = {
  branca: '#fff',
  preta: '#000',
  rosa_claro: '#ffedf7',
  rosa_escuro: '#f398ca',
  fundo: '#f4e4f4'
}

interface ImgProps {
  shadowColor?: string
}

const shadowAnimation = keyframes`
  0% {
    filter: drop-shadow(0px 0px 0px var(--shadow-color, orange));
  }

  100% {
    filter: drop-shadow(0px 0px 150px var(--shadow-color, orange));
  }
`

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${Cores.preta};
  }
`

export const Title = styled.h1`
  padding: 30px;
`

export const Container = styled.div`
  color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const ContaineImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Img = styled.img<ImgProps>`
  height: 80vh;
  animation: ${shadowAnimation} 2s infinite alternate;
  --shadow-color: ${(props) => props.shadowColor || 'orange'};
  filter: drop-shadow(10px 7px 50px var(--shadow-color));
`
