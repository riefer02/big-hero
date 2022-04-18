import Layout from './components/Layout'
import WorldSection from './components/WorldView';
import { store } from './app/store'
import { Provider } from 'react-redux'
import './assets/scss/index.scss';

function App() {
  return (
    <div id="the-big-hero">
      <Provider store={store}>
        <Layout>
          <WorldSection />
        </Layout>
      </Provider>
    </div>
  )
}

export default App
