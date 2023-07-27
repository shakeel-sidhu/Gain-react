import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import "./styles/Styled.css"

const Overview = () => (
  <Box
    sx={{
      background: 'transparent url(overview.png) 0% 0% no-repeat padding-box',
      backgroundSize: '100% auto',
      minHeight: '52vw',
      pt: { xs: 25, md: 19 },
      mt: { xs: '-75px', md: 0 }
    }}
  >
    <Container>
      <Box sx={{ maxWidth:{xs:480,sm:480,md:540} , margin:{xs:"0 auto", md:"unset"}, color: '#fff', textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant='h2' sx={{ fontFamily:"CoinbaseTextMedium",lineHight:"75px",fontWeight: 500, fontSize: { xs: 36, md: 70 }, mb: 3, px: { xs: 6, md: 0 } }}>Experience the New Era of NFT to earn.</Typography>
        <Typography variant='h5' sx={{fontFamily:"CoinbaseTextMedium", fontSize: { xs: 18, md: 25 }, pr: { md: 6 } }}>
          Unlock New Possibilities: Realize Your targeting. Break Free fromTime-Wasting Games.
        </Typography>
        <div className='OverViewButton'>
        <Button className="LaunchButton" variant="contained" color="warning" sx={{ backgroundColor: '#FCC141', color: '#180531', px: 3, py: 1, my: 3, mx: 'auto', display: { xs: 'block', md: 'none' } }}>
          Launch App
        </Button>
        </div>

      </Box>
    </Container>
  </Box>
)

export default Overview