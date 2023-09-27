// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './app/store';
import Resume from './components/Resume';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Resume />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
