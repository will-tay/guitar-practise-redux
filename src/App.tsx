import React, { FunctionComponent } from 'react'
// import TagManager from 'react-gtm-module'
import { ToastProvider } from 'react-toast-notifications'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import createProvider from './components/Error/ErrorBoundary'
import MainView from './components/MainView'
// import { IContainerOffsets } from './store/ducks/configs'
import rootReducer from './store/rootReducer'
import rootSaga from './store/rootSaga'

// const tagManagerArgs = {
//   gtmId: 'GTM-5CSHQ6S'
// }

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  //   secondary: {
  //     main: green[500],
  //   },
  // },
})

const AppProvider = createProvider(rootReducer, rootSaga)

// TagManager.initialize(tagManagerArgs)

const App: FunctionComponent = () => (
  <ToastProvider autoDismiss>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <MainView />
      </AppProvider>
    </ThemeProvider>
  </ToastProvider>
)

export default App
