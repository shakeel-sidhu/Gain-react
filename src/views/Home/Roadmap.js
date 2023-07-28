import React from 'react'
import { Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'

const Roadmap = () => (
  <Container
    sx={{
      background: 'transparent url(coins1.png) 100% 100% no-repeat padding-box',
      backgroundSize: 'auto 15%',
      textAlign: 'center',
    }}
  >
    <Divider />
    <Typography sx={{ fontFamily:"CoinbaseTextMedium",color: '#97C9D4', my: 3 }}>What to expect?</Typography>
    <Typography sx={{fontFamily:"CoinbaseTextMedium", fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#97C9D4'}}>
      The Roadmap
    </Typography>
    <div>
     <img style={{width:"100%", height:"auto", borderRadius:"50%", margin: "35px auto", boxShadow:"0px 1px 35px #29166D82"}} src='/resources/roadmap2.png'/>
    </div>
  </Container>
)

export default Roadmap
