import React, { FunctionComponent } from 'react'
// import TagManager from 'react-gtm-module'
import { ToastProvider } from 'react-toast-notifications'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { amber, deepPurple } from '@material-ui/core/colors'

import createProvider from './components/Error/ErrorBoundary'
import MainView from './components/MainView'
// import { IContainerOffsets } from './store/ducks/configs'
import rootReducer from './store/rootReducer'
import rootSaga from './store/rootSaga'

// const tagManagerArgs = {
//   gtmId: 'GTM-5CSHQ6S'
// }

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: amber
  }
})

const AppProvider = createProvider(rootReducer, rootSaga)

// TagManager.initialize(tagManagerArgs)

const App: FunctionComponent = () => (
  <>
    <CssBaseline />
    <ToastProvider autoDismiss>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <MainView />
        </AppProvider>
      </ThemeProvider>
    </ToastProvider>
  </>
)

export default App
