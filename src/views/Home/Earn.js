import React from 'react'
import { Container, Box, Grid, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import { EARN_METHODS } from '@/src/constants/constants'
import Slider from "react-slick";
import "./styles/Styled.css"

const Earn = () => {
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint:900,
          settings: {
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }
        }
      ]
    };
  return(
  <Container className='earnwithgain'>
    <Divider />
    {/* <Slider /> */}
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography sx={{ color: '#97C9D4', my: 3 }}>Can I make money?</Typography>
      <Typography sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#97C9D4' }}>
        Earn with Mr.Gain
      </Typography>
    </Box>
    <Slider {...settings}>
      {EARN_METHODS.map((item, index) => (
        <Box
        className='earnSLider'
          key={`em-${item.id}`}
        >
          <Typography sx={{ fontFamily:"CoinbaseTextMedium",fontSize: { xs: 20, md: 30 }, color: '#CADADC', mb: 2 }}>
            {item.label}
          </Typography>
          <Typography sx={{ fontSize: { xs: 14, md: 18 }, color: '#868194' }}>
            {item.content}
          </Typography>
        </Box>
      ))}
    </Slider>
  </Container>
)}

export default Earn