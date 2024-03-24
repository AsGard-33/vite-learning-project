import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homework29 from "./homeworks/homework29/Homework29"

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

function App () {
  return (<BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element="Page Not Found" />
      </Routes>
    </Layout>
    {/* <Homework29/> */}
  </BrowserRouter>
  )
}

export default App
