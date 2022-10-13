import styled from 'styled-components'

export const DropDownContainer = styled.div`
  width: 10.5em;
`

export const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position:relative;
  cursor: pointer;
  width: 260px;
  height: 60px;
  color: ${({ theme }) =>
    theme.colors.PRIMARY_HEADER_NUMBER};
  border: 2px solid
    ${({ theme }) =>
      theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
  background: ${({ theme }) => theme.colors.BODY_HEADFONT};
  border-radius: 4px;
  font-size: 20px;
  padding: 0px 16px;
`
export const Arrow = styled.div`
  position: absolute;
  top: 18px;
  right: 16px;
  width: 0;
  height: 0;
  border: 12px solid transparent;
  border-top: 16px solid ${({ theme }) =>
      theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
  border-radius: 2px;
`
export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 260px;
`

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;

  background: ${({ theme }) => theme.colors.BODY_HEADFONT};
  border: 2px solid
    ${({ theme }) =>
      theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
  box-sizing: border-box;
  color: ${({ theme }) =>
    theme.colors.PRIMARY_HEADER_NUMBER};
  font-size: 20px;
`

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 10px 16px;
  &:hover {
    color: ${({ theme }) => theme.colors.BODY_HEADFONT};
    background: ${({ theme }) =>
      theme.colors.PRIMARY_HEADER_NUMBER};
  }
  &:nth-child(2) {
    border-top: 2px solid
      ${({ theme }) =>
        theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
    border-bottom: 2px solid
      ${({ theme }) =>
        theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
  }
`
