import ReactDOM from 'react-dom';
import { GlobalStyle } from './GlobalStyle';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root')
);
