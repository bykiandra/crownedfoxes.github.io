import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { MantineProvider } from '@mantine/core';

import App from './App'

import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <MantineProvider theme = {{
      fontFamily: 'Open Sans',
      fontFamilyMonospace: 'Monaco, Courier, monospace',
      headings: { fontFamily: 'Open Sans' }
    }}>
      <App />
    </MantineProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
