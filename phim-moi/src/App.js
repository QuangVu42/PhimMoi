import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import React,{ Fragment } from 'react'

import publicRoutes from './Router/Router'
import DefaultLayout from './Layouts/DefaultLayout/DefaultLayout'


function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          {publicRoutes.map((route,i)=>{
            const Page = route.component
            var Layout = DefaultLayout
            let ele = <Layout children ={<Page />} ></Layout> 

            // xu ly neu co Layout
            if(route.Layout){
              Layout = route.Layout
              ele = <Layout><Page /></Layout>
            }else if(route.Layout === null){
              Layout = Fragment
              ele = <Layout><Page /></Layout>
            }

            return(
              <Route 
                key = {i}
                path = {route.path}
                element = {ele}
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
