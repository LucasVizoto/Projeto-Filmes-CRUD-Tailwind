
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import AddFilme from './pages/AddFilme'
import EditFilme from './pages/EditFIlme'
import SeeMovie from './pages/SeeMovie'
import Header from '../public/Header'

function App() {

  return (
    <Router>
      <Header/>
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
