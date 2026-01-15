import { Header, Sidebar } from './components'
import { Dashboard } from './pages'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      {/* <Header /> */}
      <Dashboard />
    </div>
  )
}

export default App
