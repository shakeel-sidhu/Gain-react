import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import "./styles/Styled.css";

const About = () => (
  <Container
  className="aboutMain"
    sx={{
      background:{ 
        xs: 'transparent url(about.png) 0% 100% no-repeat padding-box',
        md: 'transparent url(about.png) 0% 100% no-repeat padding-box', 
      },
      height: { xs: 'unset',md: '800px' },
      textAlign: 'center',
    }}
  >
    <Divider />
    <div className='SideBar'>
      <a href='https://www.telegram.com/' target="_blank" ><img src='socials/telegram.svg'/></a>
      <a href='https://twitter.com/' target="_blank" ><img src='socials/twitter.svg'/></a>
      <a href='https://discord.com/' target="_blank" ><img src='socials/discord.svg'/></a>
    </div>
    <Box sx={{ textAlign: 'center', px: 4, mb: 2 }}>
      <Typography sx={{fontFamily:"Coinbase Sans,Regular", color: '#97C9D4', mt: 6, mb: 3 }}>What is Mr.Gain?</Typography>
      <Typography sx={{ fontFamily:"CoinbaseTextMedium", lineHeight:{xs: "41px", md:"51px"},fontSize: { xs: 31, md: 48 }, fontWeight: 500, color: '#CADADC'}}>
        The platform built for the new Era of NFT monetization and liqudity
      </Typography>
    </Box>
    <Typography sx={{fontFamily:"Coinbase Sans, Regular", marginTop:{xs:'29px', md:"56px"}, fontSize: 16, color: '#90C4CF', width: { md: '70%', lg: '50%' }, mx: 'auto', mb: 4 }}>
      Mr.Gain is a groundbreaking decentralized platform that revolutionizes the world of NFTs through its unique video tricks concept. Utilizing the power of smart contracts, each video edition on Mr.Gain is securely and transparently executed, ensuring fairness and trust. With Mr.Gain, you have the power to unleash your creativity by creating your own personalized edition of the video.
    </Typography>
  </Container>
)

export default About