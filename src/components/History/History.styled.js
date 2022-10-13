import styled from 'styled-components'

export const Wrapper = styled.div`
width: 30%;
display: flex;
flex-direction: column;
border-left: 2px solid ${({ theme }) => theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
padding: 10px 40px;
p{
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 600px;
  text-align: center;
  color: ${({ theme }) => theme.colors.PRIMARY_HEADER_NUMBER};
}
@media (max-width: 768px) {
    display: none;
  }
`

export const HistoryContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items:flex-start;
overflow-y: auto;
height: 600px;
ul{
  display: flex;
  flex-direction: column;
  gap: 10px;
  li{
    color: ${({ theme }) => theme.colors.PRIMARY_HEADER_NUMBER};
  }
}
`
