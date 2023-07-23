import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material'
import { FOOTER_MENU, SOCIALS } from '../constants/constants'
import "./Footer.css"

const Footer = () => (
  <Box
    sx={{
      background: 'transparent url(footer.png) 0% 100% no-repeat padding-box',
      backgroundSize: '100% auto',
      minHeight: 568,
    }}
    className="comunitygain"
  >
    <Container maxWidth='md' sx={{ mt: { xs: 5, md: 10 } }}>
      <Box className="FooterMain" sx={{ display: 'flex', textAlign: { xs: 'center', md: 'left' }, mb: 6 }}>
        <Box className="footerMenu" sx={{ flexDirection: 'column', justifyContent: 'center', flex: 1, textAlign: 'center',}}>
          {FOOTER_MENU.map(item => (
          <Box key={`fm-${item.id}`} sx={{  mb: 5,}}>
            <Link sx={{fontSize: 20,color: '#FFF',textDecoration: "none",cursor:"pointer","&:hover": {
              fontWeight:"bold",
          },}}>{item.title}</Link>
          </Box>
          ))}
        </Box>
        <Box sx={{ flex: 1, color: '#FFFFFF', opacity: 0.7 }}>
          {SOCIALS.map(item => (
            <Box className="FooterSocial" key={`si-${item.id}`} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{ width: { xs: 32, md: 44 }, mr: 2, mt: 1 }}>
                <a href={item.link} target={"_blank"}><img src={item.url}  /></a>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 20, fontWeight: 500, mb: 1 }}>{item.title}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.content}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Typography sx={{ color: '#FFF', fontSize: 16, textAlign: 'center', pb: 3 }}>© Copyright 2023, Mr.Gain. All Rights Reserved.</Typography>
    </Container>
  </Box>
)

export default Footer