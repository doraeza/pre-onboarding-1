import './App.css'
import Main from './pages/Main'
import About from './pages/About'
import Router from './components/Router'
import Route from './components/Route'

function App() {
  return (
    <>
      <div>
        <Router>
          <Route path="/" component={<Main />} />
          <Route path="/about" component={<About />} />
        </Router>
      </div>
     
    </>
  )
}

export default App
