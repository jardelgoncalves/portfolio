const fallbackFont =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

export const typography = {
  family: {
    primary: `Raleway, ${fallbackFont}`,
    secondary: `Raleway, ${fallbackFont}`
  },
  sizes: {
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.5rem',
    xl: '2rem',
    '1xl': '2.25rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '3.5rem',
    '5xl': '4rem'
  },
  lineHeight: {
    xs: '0.875rem',
    sm: '1rem',
    base: '1.675rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '3.5rem'
  },
  weight: {
    thin: 100,
    xlight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    xBold: 800,
    black: 900
  }
} as const
