import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import { WINNING_FORMULAS } from '@/src/constants/constants'
import "./styles/Styled.css"

const HowWorks = () => (
  <Container
  className='HowWorksImage'
  sx={{
    background:{ 
      xs:"transparent url(coins3.png) 7% 50% no-repeat padding-box",
      md:"transparent url(coins3.png) 97% -9% no-repeat padding-box",
    },
    backgroundSize:{xs:"19% 9%", md:"27% 36%"},
    textAlign: { xs: 'center', md: 'left' },
    mb: 8,
  }}
>
  <Container
  className='HowWorksmian'>
    <Divider />
    <Box sx={{ width: { md: '70%', lg: '58%' } }}>
      <Typography sx={{fontFamily:"CoinbaseTextMedium", color: '#97C9D4', mt: 6, mb: 3 }}>How it Works?</Typography>
      <Typography sx={{ fontFamily:"CoinbaseTextMedium", lineHeight:{xs:"41px", md:"52px"},fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#CADADC', mb: 6 }}>
        Empowering Creators, Sponsors,and Influencers: The Winning Formula
      </Typography>
      {WINNING_FORMULAS.map(item => (
        <Box key={`fm-${item.id}`} sx={{ width: { md: '70%', lg: '68%' },mb: 3 }}>
          <Typography sx={{fontFamily:"CoinbaseTextMedium", fontSize: 18, fontWeight: 400, color: '#CADADC' }}>{item.title}</Typography>
          <Typography sx={{fontFamily:"CoinbaseTextMedium", fontSize: 16, color: '#90C4CF' }}>{item.content}</Typography>
        </Box>
      ))}
    </Box>
  </Container>
  </Container>
)

export default HowWorks