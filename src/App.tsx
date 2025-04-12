import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Modules from './pages/Modules'
import Practice from './pages/Practice'
import Progress from './pages/Progress'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="modules" element={<Modules />} />
          <Route path="practice" element={<Practice />} />
          <Route path="progress" element={<Progress />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App 