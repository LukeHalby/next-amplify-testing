import { GeistProvider, CssBaseline } from '@geist-ui/core'
import AppLayout from '../src/layouts/AppLayout'
import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css';

function App({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </GeistProvider>
  )
}

export default App
