import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './Redux/Store.ts';
import { ThemeProvider } from './component/ContextApi/ContextApi.tsx';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
)
