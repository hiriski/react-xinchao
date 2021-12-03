import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/fonts/hk-grotesk/style.css'
import ReduxProvider from './providers/redux-provider'
import ThemeProvider from './providers/theme-provider'
import SnackbarProvider from './providers/snackbar-provider'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('RootXinChao')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
