import styled from 'styled-components'

export const Wrapper = styled.div`
width: 30%;
display: flex;
flex-direction: column;
border-left: 2px solid ${({ theme }) => theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
padding-left: 40px;
padding-top: 10px;
p{
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.PRIMARY_HEADER_NUMBER};
}
`

export const HistoryContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items:flex-start;
`
