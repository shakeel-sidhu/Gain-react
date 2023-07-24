import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import { WINNING_FORMULAS } from '@/src/constants/constants'
import "./styles/Styled.css"

const HowWorks = () => (
  <Container
  className='HowWorksImage'
  sx={{
    // background: 'transparent url(coins3.png) 97% -9% no-repeat padding-box',
    // backgroundSize: '27% 36%',
    background:{ 
      xs:"transparent url(coins3.png) 7% 50% no-repeat padding-box",
      md:"transparent url(coins3.png) 97% -9% no-repeat padding-box",
    },
    backgroundSize:{xs:"19% 9%", md:"27% 36%"},
    // minHeight: '67vw',
    textAlign: { xs: 'center', md: 'left' },
    mb: 8,
  }}
>
  <Container
  className='HowWorksmian'
    // sx={{
    //   // background: 'transparent url(howworks.png) 100% 164px no-repeat padding-box',
    //   background:{ 
    //     xs:"transparent url(howworks.png) 164px 441px no-repeat padding-box",
    //     md:"transparent url(howworks.png) 226px 162px no-repeat padding-box",
    //   },
    //   backgroundSize:{xs:"190px", md:"auto 762px"}
    //   // minHeight: '67vw',
    //   // textAlign: { xs: 'center', md: 'left' },
    //   // mb: 4,
    // }}
  >
    <Divider />
    <Box sx={{ width: { md: '70%', lg: '58%' } }}>
      <Typography sx={{ color: '#97C9D4', mt: 6, mb: 3 }}>How it Works?</Typography>
      <Typography sx={{ fontFamily:"CoinbaseSansMedium", lineHeight:{xs:"41px", md:"52px"},fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#CADADC', mb: 6 }}>
        Empowering Creators, Sponsors,and Influencers: The Winning Formula
      </Typography>
      {WINNING_FORMULAS.map(item => (
        <Box key={`fm-${item.id}`} sx={{ width: { md: '70%', lg: '68%' },mb: 3 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 400, color: '#CADADC' }}>{item.title}</Typography>
          <Typography sx={{ fontSize: 16, color: '#90C4CF' }}>{item.content}</Typography>
        </Box>
      ))}
    </Box>
  </Container>
  </Container>
)

export default HowWorks