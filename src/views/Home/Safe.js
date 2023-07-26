import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import { SECURED_ASSETS } from '@/src/constants/constants'

const Safe = () => (
  <Container
  className="secureGain"
  sx={{
    background: 'transparent url(ShieldNetwork.svg) 0% 0% no-repeat padding-box',
    backgroundSize: { xs: '100% auto', md: '51% auto',backgroundPosition:"center" },
    mb: 6,
  }}
  >
  <Container
      sx={{
        background: {
          xs:'transparent url(coins2.png) 0px 21px no-repeat padding-box',
          md:"transparent url(coins2.png) 39px 234px no-repeat padding-box"
        },
        backgroundSize: { xs: '117px auto', md: '26% auto' },
        minHeight: '33vw',
        paddingLeft:"unset !important",
        paddingRight:"unset !important"
      }}
  >

  <Container
    sx={{
      background:{
        xs:'transparent url(shield.png) -51px 76px no-repeat padding-box',
        md:'transparent url(shield.png) 0% 28% no-repeat padding-box'
      },
      backgroundSize: { xs: '211px auto', md: '50% auto' },
      minHeight: '33vw',
    }}
  >
    <Divider />
    <Box sx={{ width: { md: '70%', lg: '54%' }, textAlign: { xs: 'center', md: 'right' }, ml: { md: 'auto' } }}>
      <Typography sx={{fontFamily:"Coinbase Sans,Regular", color: '#97C9D4', my: 3 }}>Is it safe?</Typography>
      <Typography sx={{ fontFamily:"CoinbaseTextMedium",fontSize: { xs: 18, md: 48 }, fontWeight: 500, color: '#CADADC', mb: 2 }}>
        Your assets, secured
      </Typography>
      <Typography sx={{fontFamily:"Coinbase Sans, Regular", fontSize: 16, color: '#90C4CF', mb: 4 }}>
        Rest assured, your experience on Mr. Gain is protected by state-of-the-art smart contracts. Our platform undergoes regular audits to guarantee the security and integrity of your transactions. We prioritize your peace of mind and strive to provide a trustworthy and reliable environment for all our users.
      </Typography>
      <Grid container spacing={2} sx={{ opacity: 0.6, width: { md: '80%' }, ml: 'auto', mb: 3 }}>
        {SECURED_ASSETS.map(item => (
          <Grid key={`sa-${item.id}`} item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', px: 3 }}>
            <img src={item.url} width='100%' />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
  </Container>
  </Container>
)

export default Safe