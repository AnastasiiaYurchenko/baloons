import Header from 'components/Header/Header'
import React from 'react'
import { Container } from './Layout.styled'

const Layout = ({children}) => {
  return (
      <Container>
          <Header />
          <main>{children}</main>
          <footer></footer>
      </Container>
  )
}

export default Layout