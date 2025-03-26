
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import {RouterProvider, createHashRouter} from "react-router-dom";
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact';

import NotFound from './components/NotFound/NotFound';


function App() {
let x = createHashRouter([
  {path: "" , element: <Layout/> , children:[
    {path:"/", element: <Header/>},
    {path:"about", element : <About/>},
    {path:"projects", element : <Projects/>},
    {path:"testimonial", element : <Testimonial/>},
    {path:"contact", element : <Contact/>},
    {path:"*", element : <NotFound/>},

  ]
  
  }
]

)


  return (
    
    <RouterProvider router={x}>
    </RouterProvider>
    
  )
}

export default App
