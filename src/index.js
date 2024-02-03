import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    mainBgColor: '#ffffff',
    mainTexColor: '#222222',
    secondaryTextColor: '#565148',
    textareaColor: "#888",
    labelsColor: "#949494",
    textWhiteColor: '#ffffff',
    accentColor: '#ED4B5E',
    secondaryAccentColor: '#FFEFF0',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
