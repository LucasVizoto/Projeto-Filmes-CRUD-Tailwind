
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import AddFilme from './pages/AddFilme'
import EditFilme from './pages/EditFIlme'
import SeeMovie from './pages/SeeMovie'

function App() {

  return (
    <Router>
      <Toaster invert richColors/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add' element={<AddFilme/>}/>
        <Route path='/edit/:id' element={<EditFilme/>}/>
        <Route path='/view/:id' element={<SeeMovie/>}/>
      </Routes>
    </Router>
  );
}

export default App
