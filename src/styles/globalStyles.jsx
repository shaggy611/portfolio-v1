import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --bg-color-main: ${(props) => props.theme.colors.backgroundColorMain};
  --bg-color-second: ${(props) => props.theme.colors.backgroundColorSecond};
  --main-color: ${(props) => props.theme.colors.mainColor};
  --second-color: ${(props) => props.theme.colors.secondColor};
  --text-color: ${(props) => props.theme.colors.textColor};
  --third-color: ${(props) => props.theme.colors.thirdColor};
  --fourth-color: ${(props) => props.theme.colors.fourthColor}; 
  --fivth-color: ${(props) => props.theme.colors.fivthColor};   
  --font-family: ${(props) => props.theme.colors.fontFamily};  
  --font-family-second: ${(props) => props.theme.colors.fontFamilySecond}; 
  font-size: 22px;
}

body {
  background-color: var(--bg-color-main);
  font-family: var(--font-family);
  color: var(--text-color);
}

/* NormalizeCSS - Reset css default values
   ========================================================================== */

   html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
`

export default GlobalStyle
