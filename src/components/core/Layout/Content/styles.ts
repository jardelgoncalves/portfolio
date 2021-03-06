import styled from 'styled-components'

type ContentProps = {
  full?: boolean | undefined
  hasSide?: boolean | undefined
}

export const Content = styled.section<ContentProps>`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme, full, hasSide }) =>
    full || hasSide ? '100%' : theme.sizes.portView};
  width: 100%;
  padding: ${({ full, hasSide }) =>
    full ? 0 : hasSide ? '0 4rem' : '0 10rem'};

  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('huge')`
    padding: ${full ? '0' : hasSide ? '0 3.675rem' : '0 10rem'};
  `}
  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('large')`
    padding: ${full ? '0' : hasSide ? '0 3.145rem' : '0 7.5rem'};
  `}
  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('medium')`
    padding:${full ? '0' : hasSide ? '0 2.5rem' : '0 3rem'};
  `}
  ${({ theme, full }) => theme.breakpoints.lessThan('small')`
    padding: ${full ? '0' : '0 1.2rem'};
  `}
`

export const Footer = styled.footer`
  height: 40px;
  width: 100%;
`

export const Wrapper = styled.main.attrs((props) => ({
  id: 'content-page',
  ...props
}))`
  grid-area: content;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
`
