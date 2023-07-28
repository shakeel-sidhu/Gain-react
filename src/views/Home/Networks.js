import React from 'react'
import { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Divider from '@/src/components/Divider'
import { SUPPORTED_NETWORKS } from '@/src/constants/constants'

const Networks = () => {
  const [hoverdText, setHoverText] = useState("");
  const [currextId, setCurrectSoialId] = useState(null);

  const mouseOverHandler = (event)=>{
    const socialId = Number(event.currentTarget.id);
    setCurrectSoialId(socialId)
    let hoverText;
    if(socialId === 1){
       hoverText = "Arbitrum";
    }
    if(socialId === 2){
       hoverText = "Avalanche";
    }
    if(socialId === 3){
       hoverText = "BSC";
    }
    if(socialId === 4){
       hoverText = "Celo";
    }
    if(socialId === 5){
       hoverText = "Fantom";
    }
    if(socialId === 6){
       hoverText = "Gnosis Chain";
    }
    if(socialId === 7){
        hoverText = "Harmony";
    }
    if(socialId === 8){
       hoverText = "ethereum";
    }
    if(socialId === 9){
       hoverText = "MoonRiver";
    }
    if(socialId === 10){
       hoverText = "Near";
    }
    if(socialId === 11){
       hoverText = "Optimism";
    }
    if(socialId === 12){
       hoverText = "arweave";
    }
    if(socialId === 13){
       hoverText = "MoonBeam";
    }
    if(socialId === 14){
       hoverText = "polygon";
    }
    setHoverText(hoverText)
  };

  const mouseOutHandler = () => {
    setHoverText("");
  }
  const conditionalWidth = currextId === 6 ? "97px" : null;
  console.log(conditionalWidth,'conditionalWidth')
  return(
  <Container maxWidth='md' sx={{ textAlign: 'center' }}>
    <Divider />
    <Typography sx={{fontFamily:"CoinbaseTextMedium", fontSize: { xs: 34, md: 48 }, fontWeight: 500, color: '#97C9D4', py: { xs: 5, md: 10 } }}>
      Supported Networks
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: { xs: 6, md: 10 } }}>
      {SUPPORTED_NETWORKS.map(item => (
        item.id < 8 && (
          <Box onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} id={item.id} key={`sn-${item.id}`} sx={{position:"relative", height: { xs: 40 , md: 86} }}>
            {item.id === currextId && <Typography
             sx={{
              color:"#E1E0E5",
              fontSize:{ xs:"14px", md:"16px" },
              position:'absolute',
              top:{xs:'-29px', md:'-34px'},
              left:{xs:'-7px',md:0},
              right:0,
              bottom:0,
              margin:"auto",
              fontFamily:"CoinbaseTextMedium",
              width:{width:currextId === 6 ? "100px" : null}
            }}
            >{hoverdText}</Typography>
            }
            <img  src={item.url} height='100%' />
          </Box>
        )
      ))}
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: { xs: 10, md: 20 } }}>
      {SUPPORTED_NETWORKS.map(item => {
         return(item.id > 7 && (
          <Box onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} id={item.id} key={`sn-${item.id}`} sx={{ position:"relative",height: { xs: 40 , md: 86}, flex: 1 }}>
            {item.id === currextId && <Typography 
             sx={{
              color:"#E1E0E5",
              fontSize:{ xs:"14px", md:"16px" },
              position:'absolute',
              top:{xs:'-29px', md:'-34px'},
              left:{xs:'-7px',md:0},
              right:0,
              bottom:0,
              margin:"auto",
            }}
            >{hoverdText}</Typography>
            }
            <img src={item.url} height='100%' />
          </Box>
        ))
      })}
    </Box>
    <Divider />
  </Container>
)}

export default Networks