import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'

const About = () => (
  <Container
    sx={{
      // background: 'transparent url(about.png) 0% 100% no-repeat padding-box',
      background:{ 
        xs: 'transparent url(about-mobile.png) 0% 100% no-repeat padding-box',
        md: 'transparent url(about.png) 0% 100% no-repeat padding-box', 
      },
      backgroundSize: { xs:'100% auto',md:'100% auto' },
      height: { xs: '50vw',md: '800px' },
      // minHeight:{ xs: '50vw' },
      textAlign: 'center',
    }}
  >
    <Divider />
    <Box sx={{ textAlign: 'center', px: 4, mb: 2 }}>
      <Typography sx={{ color: '#97C9D4', mt: 6, mb: 3 }}>What is Mr.Gain?</Typography>
      <Typography sx={{ fontFamily:"CoinbaseSansMedium", lineHeight:"51px",fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#CADADC'}}>
        The platform built for the new Era of NFT monetization and liqudity
      </Typography>
    </Box>
    <Typography sx={{ marginTop:'56px', fontSize: 16, color: '#90C4CF', width: { md: '70%', lg: '50%' }, mx: 'auto', mb: 4 }}>
      Mr.Gain is a groundbreaking decentralized platform that revolutionizes the world of NFTs through its unique video tricks concept. Utilizing the power of smart contracts, each video edition on Mr.Gain is securely and transparently executed, ensuring fairness and trust. With Mr.Gain, you have the power to unleash your creativity by creating your own personalized edition of the video.
    </Typography>
  </Container>
)

export default About