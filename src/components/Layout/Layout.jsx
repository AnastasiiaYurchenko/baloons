import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React from 'react'
// import { Container } from './Layout.styled'
// import Main from 'components/Main/Main';


const Layout = ({children}) => {
  return (
    <div>
           {/* <Container> */}
      <Header /> 
      <main>{children}</main>
      <Footer/>
     {/* </Container> */}
     </div>

  )
}

export default Layout