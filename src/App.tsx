import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import Pages from './routes'

import { store } from './store'
import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Pages />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
