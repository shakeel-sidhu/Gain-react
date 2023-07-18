import React from 'react'
import { Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'

const Roadmap = () => (
  <Container
    sx={{
      background: 'transparent url(roadmap.png) 0% 100% no-repeat padding-box',
      backgroundSize: '100% auto',
      textAlign: 'center',
      minHeight: { xs: '140vw', sm: '130vw', md: '130vw', lg: '110vw', xl: '90vw' },
    }}
  >
    <Divider />
    <Typography sx={{ color: '#97C9D4', my: 3 }}>What to expect?</Typography>
    <Typography sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#97C9D4'}}>
      The Roadmap
    </Typography>
  </Container>
)

export default Roadmap
