
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Show from './Show'
import ShowD from './ShowD'

function App() {


  return (
    <>

     <Routes>
      <Route path='/' element={<Show/>}></Route>
      <Route path='details/:Id' element={<ShowD/>}></Route>
     </Routes>
    </>
  )
}

export default App
