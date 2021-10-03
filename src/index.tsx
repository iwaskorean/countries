import ReactDOM from 'react-dom';
import { GlobalStyle } from './GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </>,
  document.querySelector('#root')
);
