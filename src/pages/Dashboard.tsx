import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function Dashboard() {
  return (
    <Box className='main-container'>
      <Sidebar />
      <Box className='wrapper-page'>
        <Header />
        <Box className='page-content'>
            Dashboard
        </Box>
      </Box>
    </Box>
  )
}
