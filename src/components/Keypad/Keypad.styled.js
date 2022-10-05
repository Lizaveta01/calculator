import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 18px 70px;

`

export const KeysContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px 60px;
  flex-wrap: wrap;

`
export const KeyItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  width: 80px;
  height: 80px;
  color: ${({ theme }) => theme.colors.PRIMARY_HEADER_NUMBER};
  border: 2px solid ${({ theme }) => theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
  background: ${({ theme }) => theme.colors.SECONDARY_LIGHT_BUTTOM};
  border-radius: 18px;
  font-size: 30px;
`
