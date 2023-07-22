import React from 'react'
import { Container, Box, Grid, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import { EARN_METHODS } from '@/src/constants/constants'

const Earn = () => (
  <Container className='earnwithgain'>
    <Divider />
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography sx={{ color: '#97C9D4', my: 3 }}>Can I make money?</Typography>
      <Typography sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#97C9D4' }}>
        Earn with Mr.Gain
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', py: { md: 20 } }}>
      {EARN_METHODS.map((item, index) => (
        <Box
          key={`em-${item.id}`}
          item
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            flex: 1,
            backgroundColor: '#211253',
            border: '1px solid #8269D4',
            p: 3,
            pr: 4,
            pt: 4,
            borderRadius: 3,
            mx: () => index === 1 ? { md: 8, } : 0,
            mb: 3,
          }}
        >
          <Typography sx={{ fontFamily:"CoinbaseSansMedium",fontSize: { xs: 20, md: 30 }, color: '#CADADC', mb: 2 }}>
            {item.label}
          </Typography>
          <Typography sx={{ fontSize: { xs: 14, md: 18 }, color: '#868194' }}>
            {item.content}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
)

export default Earn