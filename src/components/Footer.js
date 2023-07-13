import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { FOOTER_MENU, SOCIALS } from '../constants/constants'

const Footer = () => (
  <Box
    sx={{
      background: 'transparent url(footer.png) 0% 100% no-repeat padding-box',
      backgroundSize: '100% auto',
      minHeight: 568,
    }}
  >
    <Container maxWidth='md' sx={{ mt: { xs: 5, md: 10 } }}>
      <Box sx={{ display: 'flex', textAlign: { xs: 'center', md: 'left' }, mb: 6 }}>
        <Box sx={{ flexDirection: 'column', justifyContent: 'center', flex: 1, textAlign: 'center', display: { xs: 'none', md: 'flex' } }}>
          {FOOTER_MENU.map(item => (
            <Typography key={`fm-${item.id}`} sx={{ color: '#FFF', fontSize: 20, mb: 5 }}>{item.title}</Typography>
          ))}
        </Box>
        <Box sx={{ flex: 1, color: '#FFFFFF', opacity: 0.7 }}>
          {SOCIALS.map(item => (
            <Box key={`si-${item.id}`} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', mb: 3 }}>
              <Box sx={{ width: { xs: 32, md: 44 }, mr: 2, mt: 1 }}>
                <img src={item.url}  />
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