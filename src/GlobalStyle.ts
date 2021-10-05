import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './styled/theme';

export const GlobalStyle = createGlobalStyle`

:root {
  --font-light: 300;
  --font-bold: 600;
  --font-extra-bold: 800;
  
  --font-size-small: 14px;
  --font-size-large: 16px;

  --elements: ${({ theme }: { theme: ThemeType }) =>
    theme.elementBackgroundColor} ;
  --background: ${({ theme }: { theme: ThemeType }) => theme.backgroundColor};
  --input: ${({ theme }: { theme: ThemeType }) => theme.inputBackground};
  --text: ${({ theme }: { theme: ThemeType }) => theme.color};
  --box-shadow: ${({ theme }: { theme: ThemeType }) => theme.boxShadow};  
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  width:100%;
  min-height: 100vh;
  font-family: 'Nunito Sans', sans-serif;
  @media(min-width:1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
  }
}

body {
  background-color: var(--background);
}

.pagination {
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;

  > * {
    font-size: 1rem;
  }

  li {
    width:2.5rem;
    height: 2.5rem;
    display:flex;
    align-items:center;
    justify-content: center;
  }
}
`;
