import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 40px;
  background: ${({ theme }) => theme.colors.BODY_HEADFONT};
  h1 {
    font-weight: 500;
    margin-top: 40px;
    color: ${({ theme }) =>
      theme.colors.PRIMARY_HEADER_NUMBER};
  }
  button {
    text-align: start;
    cursor: pointer;
    width: 260px;
    height: 60px;
    color: ${({ theme }) =>
      theme.colors.PRIMARY_HEADER_NUMBER};
    border: 2px solid
      ${({ theme }) =>
        theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
    background: ${({ theme }) =>
      theme.colors.SECONDARY_LIGHT_BUTTOM};
    border-radius: 4px;
    font-size: 20px;
    padding: 0px 12px;
    &:hover{
      background: ${({ theme }) =>
      theme.colors.PRIMARY_HEADER_NUMBER};
      color: ${({ theme }) =>
      theme.colors.SECONDARY_LIGHT_BUTTOM};
    }
  }
`
export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 18px;
    margin-bottom: 4px;
    color: ${({ theme }) =>
      theme.colors.PRIMARY_HEADER_NUMBER};
  }
  select {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 260px;
    height: 60px;
    color: ${({ theme }) =>
      theme.colors.PRIMARY_HEADER_NUMBER};
    border: 2px solid
      ${({ theme }) =>
        theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
    background: ${({ theme }) =>
      theme.colors.BODY_HEADFONT};
    border-radius: 4px;
    font-size: 20px;
    padding: 0px 12px;
  }

`

