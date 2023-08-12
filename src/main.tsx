import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient,QueryClientProvider  } from '@tanstack/react-query'
import { ThemeProvider } from './component/ContextApi/ContextApi.tsx';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
