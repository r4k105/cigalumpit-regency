import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './components/UserList'
import AddUser from './components/AddUser'
import Tables from './components/tables'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserList/>} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/table' element={<Tables/>} />
      </Routes>
    </Router>
  )
}

export default App
