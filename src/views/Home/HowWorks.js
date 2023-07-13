import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import { WINNING_FORMULAS } from '@/src/constants/constants'

const HowWorks = () => (
  <Container
    sx={{
      background: 'transparent url(howworks.png) 100% 0% no-repeat padding-box',
      backgroundSize: '70% auto',
      minHeight: '60vw',
      textAlign: { xs: 'center', md: 'left' },
      mb: 4,
    }}
  >
    <Divider />
    <Box sx={{ width: { md: '70%', lg: '50%' } }}>
      <Typography sx={{ color: '#97C9D4', mt: 6, mb: 3 }}>How it Works?</Typography>
      <Typography sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#CADADC', mb: 6 }}>
        Empowering Creators, Sponsors,and Influencers: The Winning Formula
      </Typography>
      {WINNING_FORMULAS.map(item => (
        <Box key={`fm-${item.id}`} sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 400, color: '#CADADC' }}>{item.title}</Typography>
          <Typography sx={{ fontSize: 16, color: '#90C4CF' }}>{item.content}</Typography>
        </Box>
      ))}
    </Box>
  </Container>
)

export default HowWorks