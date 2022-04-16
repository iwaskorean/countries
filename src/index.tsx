import { Provider } from 'react-redux';
import { store } from './store';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </>
);
