import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import { SUPPORTED_NETWORKS } from '@/src/constants/constants'

const Networks = () => (
  <Container maxWidth='md' sx={{ textAlign: 'center' }}>
    <Divider />
    <Typography sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#97C9D4', py: { xs: 5, md: 10 } }}>
      Supported Networks
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: { xs: 6, md: 10 } }}>
      {SUPPORTED_NETWORKS.map(item => (
        item.id < 8 && (
          <Box key={`sn-${item.id}`} sx={{ height: { xs: 40 , md: 86} }}>
            <img src={item.url} height='100%' />
          </Box>
        )
      ))}
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: { xs: 10, md: 20 } }}>
      {SUPPORTED_NETWORKS.map(item => (
        item.id > 7 && (
          <Box key={`sn-${item.id}`} sx={{ height: { xs: 40 , md: 86}, flex: 1 }}>
            <img src={item.url} height='100%' />
          </Box>
        )
      ))}
    </Box>
    <Divider />
  </Container>
)

export default Networks