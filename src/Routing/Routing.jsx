import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import VideoDetail from '../Pages/Video'


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />
       
      </Routes>
      
    </BrowserRouter>
  )
}

export default Routing
