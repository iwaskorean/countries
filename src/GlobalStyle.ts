import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');


:root {
  --font-light: 300;
  --font-bold: 600;
  --font-extra-bold: 800;
  
  --font-size-small: 14px;
  --font-size-large: 16px;  
  
  --light-elements: hsl(0, 0%, 100%);
  --light-background: hsl(0, 0%, 97%);
  --light-input: hsl(0, 0%, 52%);
  --light-text: hsl(200, 15%, 8%);
  --light-box-shadow: 3px 3px 7px rgba(210, 210, 210, 0.7);

  --dark-background: hsl(207, 26%, 17%);
  --dark-elements: hsl(209, 23%, 22%);
  --dark-input: hsl(209, 23%, 22%);
  --dark-text: hsl(0, 0%, 100%);
  --dark-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.7);
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
  @include font-c-s-w(var(--text), 16px, $font-light);
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
  }
}

body {

}


@mixin font-c-s-w($color, $size, $weight) {
  color: $color;
  font-size: $size;
  font-weight: $weight;
}

@mixin flex-a-j($align-items, $justify-content) {
  display: flex;
  align-items: $align-items;
  justify-content: $justify-content;
}
`;
