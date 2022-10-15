import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.BODY_HEADFONT};
`

export const ControlViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0 10px;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
  }
  &.hidden{
    display: none;
  }
`
export const HistoryContainer = styled.div`
  &.hidden{
    display: none;
  }
`
