import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_HEADER_NUMBER};
  height: 60px;
  p {
    color: ${({ theme }) => theme.colors.BODY_HEADFONT};
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
  a {
    color: ${({ theme }) => theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
    text-decoration: none;
    font-size: 18px;
    line-height: 26px;
    &:hover{
      border-bottom: 2px solid ${({ theme }) => theme.colors.BODY_HEADFONT};
      color: ${({ theme }) => theme.colors.BODY_HEADFONT};
    }
  }
`
