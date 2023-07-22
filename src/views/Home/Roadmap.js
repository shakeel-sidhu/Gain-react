import React from 'react'
import { Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'

const Roadmap = () => (
  <Container
    sx={{
      background: 'transparent url(coins1.png) 100% 100% no-repeat padding-box',
      backgroundSize: 'auto 15%',
      textAlign: 'center',
      // minHeight: { xs: '94vw', sm: '94vw', md: '130vw', lg: '78vw', xl: '78vw' },
    }}
  >
    <Divider />
    <Typography sx={{ color: '#97C9D4', my: 3 }}>What to expect?</Typography>
    <Typography sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#97C9D4'}}>
      The Roadmap
    </Typography>
    <div>
     <img style={{width:"100%", height:"auto", borderRadius:"50%", margin: "35px auto"}} src='/resources/roadmap2.png'/>
    </div>
  </Container>
)

export default Roadmap
