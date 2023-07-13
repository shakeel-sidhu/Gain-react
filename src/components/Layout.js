import React from 'react'
import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <Box sx={{ backgroundColor: '#090028' }}>
    <Header />
    {children}
    <Footer />
  </Box>
)

export default Layout