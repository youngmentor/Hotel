import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './Redux/Store.ts';
import { ThemeProvider } from './component/ContextApi/ContextApi.tsx';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
const queryClient = new QueryClient();
const persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <PersistGate persistor={persistor} >
            <App />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
