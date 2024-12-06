import React from 'react';
import { ThemeProvider } from "styled-components";
import Routes from './routes/index';
import FontStyles from './shared/FontStyles';
import theme from './shared/theme'
import GlobalStyles from './styles/globalStyles';

function App() {
    return(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes/>
        <FontStyles/>
      </ThemeProvider>
    )
  }
    
export default App;