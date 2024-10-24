import './App.css'
import { MainLayout } from './layout/main-layout'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
