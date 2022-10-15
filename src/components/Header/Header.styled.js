import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.PRIMARY_HEADER_NUMBER};
  p {
    color: ${({ theme }) => theme.colors.BODY_HEADFONT};
  }
  @media (max-width: 768px) {
    flex-direction: column;
    p{
      font-size: 28px;
    }
  }
`
export const MenuIconDiv = styled.div`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 200;
  width: 42px;
  height: 40px;
  position: relative;
  display: none;
  justify-content: center;
  padding: 8px 0px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    width: 36px;
    height: 3px;
    background-color: ${({ theme }) =>
      theme.colors.BODY_HEADFONT};
    transition: transform 0.4s ease-in-out;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    width: 36px;
    height: 3px;
    background-color: ${({ theme }) =>
      theme.colors.BODY_HEADFONT};
    transition: transform 0.4s ease-in-out;
  }
  span {
    content: '';
    position: absolute;
    top: 20px;
    width: 36px;
    height: 3px;
    background-color: ${({ theme }) =>
      theme.colors.BODY_HEADFONT};
    transition: transform 0.2s ease-in-out;
    opacity: 100;
  }
  &.active {
    &::before {
      transform: rotate(-45deg);
      margin-top: 11px;
    }
    &::after {
      transform: rotate(45deg);
      margin-bottom: 14px;
    }
    span {
      opacity: 0;
      transform: rotate(45deg);
      margin-top: -3px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
  }
`
export const FirstlineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 20px;
`
export const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px;

  a {
    color: ${({ theme }) =>
      theme.colors.SECONDARY_NO_ACTIVE_LINK_BORDER};
    text-decoration: none;
    font-size: 18px;
    line-height: 26px;
    &:hover {
      border-bottom: 2px solid
        ${({ theme }) => theme.colors.BODY_HEADFONT};
      color: ${({ theme }) => theme.colors.BODY_HEADFONT};
    }
    &.active {
      color: ${({ theme }) => theme.colors.BODY_HEADFONT};
      border-bottom: 2px solid
        ${({ theme }) => theme.colors.BODY_HEADFONT};
      pointer-events: none;
      cursor: default;
    }
    &.active-burger {
        display: none;
        @media (max-width: 768px) {
        display: block;
        }
      }
  }
  @media (max-width: 768px) {
    transform: translateX(+100%);
    transition: all 0.3s;
    position: fixed;
    width: 100vw;
    height: 100vh;
    padding-top: 60px;
    z-index: 100;
    align-items: center;
    top: 60px;
    left: 0;
    gap: 26px;
    &.active {
    flex-direction: column;
    background-color: ${({ theme }) =>
      theme.colors.PRIMARY_HEADER_NUMBER};
    display: flex !important;
    height: 100vh;
    transform: translateX(0);
  }
    a {
      font-size: 28px;
      line-height: 34px;
    }
  }
`
