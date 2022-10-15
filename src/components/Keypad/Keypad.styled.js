import styled from 'styled-components'

export const KeysContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px 60px;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-left: 90px;
  @media (max-width: 1200px) {
    gap: 1%;
    padding-left: 4%;
  }
`
export const KeyItem = styled.button`
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 80px;
  height: 80px;
  color: ${({ theme }) =>
    theme.colors.PRIMARY_HEADER_NUMBER};
  border: 2px solid
    ${({ theme }) =>
      theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
  background: ${({ theme }) =>
    theme.colors.SECONDARY_LIGHT_BUTTOM};
  border-radius: 18px;
  font-size: 30px;
  &:hover {
    color: ${({ theme }) => theme.colors.HOVER_BUTTON_TEXT};
    background: ${({ theme }) =>
      theme.colors.HOVER_BUTTON_BACKGROUND};
    box-shadow: 12px 16px 15px -5px ${({ theme }) => theme.colors.HOVER_BUTTON_SHADOW};
  }
  @media (max-width: 1200px) {
    width: 17%;
    height: 24%;
    border-radius: 8px;
    margin-bottom: 6px;
  }
`
