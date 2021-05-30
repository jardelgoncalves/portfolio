import styled, { keyframes } from 'styled-components'

const GradientAnimation = keyframes`
  from {
    background-position-x: 0%;
  };
  to {
    background-position-x: 400vw;
  }
`

export const PresentationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TitleColorize = styled.h1`
  margin-top: 10rem;
  background: ${({ theme }) =>
    `repeating-linear-gradient(${theme.colors.gradientFontColorize})`};
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400vw 400vw;
  animation: ${GradientAnimation} 50s infinite linear forwards;
  -webkit-animation: ${GradientAnimation} 50s infinite linear forwards;
  font-size: 3.5rem;
  font-weight: ${({ theme }) => theme.typography.weight.black};
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.weight.light};
  text-align: center;
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  color: ${({ theme }) => theme.colors.textColor};
  max-width: 750px;
  width: 100%;
  padding: 0.75rem 0;

  strong {
    font-weight: ${({ theme }) => theme.typography.weight.black};
    z-index: 3;

    &:last-child {
      position: relative;
      padding: 0 0.75rem;
      margin-left: 0.125rem;

      &::after {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 1.625rem;
        background: ${({ theme }) =>
          `linear-gradient(${theme.colors.gradientEnterprise})`};
        opacity: 0.6;
        border-radius: 1.25rem;
        z-index: -1;
      }
    }
  }
`

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  a + a {
    margin-left: 0.75rem;
  }
`