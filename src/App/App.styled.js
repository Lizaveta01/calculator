import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.BODY_HEADFONT};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  @media (max-width: 768px) {
  height: 100vh;
  }
`

export const Heading = styled.h3``
