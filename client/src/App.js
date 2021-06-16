import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <Container className="my-5">
        <Route path="/" component={HomePage} exact />
      </Container>
    </Router>
  )
}

export default App
