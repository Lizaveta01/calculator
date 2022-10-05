import styled from 'styled-components'

export const Wrapper = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content:flex-end;
align-items: center;
border-bottom: 2px solid ${({ theme }) => theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
padding:0 80px;
input{
  color: ${({ theme }) => theme.colors.PRIMARY_HEADER_NUMBER};
  font-size: 30px;
  font-weight: 500;
  border:none;
  text-align:end;
}
`


