
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Home from './pages/Home'
// import Allnews from './pages/Allnews'

import News from './pages/News'
import {Route,Routes} from 'react-router-dom'
// import add from './pages/add'
import Addd from './pages/Addd'
import Edit from './pages/Edit'
import Allnews from './pages/Allnews'

function App() {


  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     
      <Route path='/all' element={<Allnews/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/add' element={<Addd/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
     </Routes>
     
    
    </>
  )
}

export default App
