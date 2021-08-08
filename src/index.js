import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { MuiThemeProvider, createTheme  } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';

// Or Create your Own theme:
const theme = createTheme ({
  palette: {
    primary: {
      main: '#3ba542'
    }
  }
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

