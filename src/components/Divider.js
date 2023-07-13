import React from 'react'
import { Divider } from '@mui/material'

const CustomDivider = () => (
  <Divider
    sx={{
      width: '100%',
      maxWidth: { xs: 273, md: 506 },
      backgroundColor: '#63229D',
      mx: 'auto',
    }} />
)

export default CustomDivider