import React, { useState } from 'react'
import { Box, Button, Drawer, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { MENUS } from '../constants/constants'

const Header = () => {
  const isMedium = useMediaQuery((theme) => theme.breakpoints.between('xs', 'md'))
  const [opened, setOpened] = useState(false)

  return (
    <Box
      sx={{
        position: { md: 'sticky' },
        top: 0,
        height: { xs: 78, md: 114 },
        backgroundColor: { xs: 'transparent', md: 'rgba(3, 1, 11, 0.8)' },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { xs: 3.5, md: 4.5 },
      }}>
      <Box sx={{ width: { xs: 114, md: 229 }, height: { xs: 54, md: 110 }, display: 'flex' }}>
        <img src='logo.svg' />
      </Box>
      {!isMedium && (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {MENUS.map(menu => (
              menu.id < 6 && <Button key={`d-${menu.id}`} sx={{ color: '#847C91', fontSize: 20, fontWeight: 300, textTransform: 'none', mx: 1 }}>{menu.label}</Button>
            ))}
          </Box>
          <Button variant="contained" color="warning" sx={{ backgroundColor: '#FCC141', color: '#180531', px: 3, py: 1 }}>
            Launch App
          </Button>
        </>
      )}
      {isMedium && <MenuIcon sx={{ color: '#FFF' }} onClick={() => setOpened(!opened)} />}
      <Drawer anchor='right' open={opened} onClose={() => setOpened(!opened)}>
        <Box sx={{ width: '80vw', minHeight: '100vh', backgroundColor: '#150737', display: 'flex', flexDirection: 'column', pt: 5  }}>
          {MENUS.map(menu => (
            <Button key={`m-${menu.id}`} sx={{ color: '#FFF', textTransform: 'none', mb: 0.5 }}>
              {menu.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Box>
  )
}

export default Header