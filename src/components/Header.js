import React, { useRef, useState } from "react";
import { Box, Button, Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MENUS } from "../constants/constants";
import "./Header.css"
const Header = () => {
  const isMedium = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "md")
  );
  const [opened, setOpened] = useState(false);

  const menuHandler = (event) => {
    const menuId = Number(event.currentTarget.id);
    if (typeof document !== "undefined" && menuId) {

      const earnWithGain = document.querySelector(".earnwithgain");
      const secureGain = document.querySelector(".secureGain");
      const comunityGain = document.querySelector(".comunitygain");

      if(menuId === 1 && earnWithGain) {
        earnWithGain.scrollIntoView({ behavior: "smooth" });
      };
      if(menuId === 2) {
       window.open('https://www.google.com/', '_blank');
      };
      if(menuId === 3 && secureGain) {
        secureGain.scrollIntoView({ behavior: "smooth" });
      };
      if(menuId === 4 && comunityGain) {
        comunityGain.scrollIntoView({ behavior: "smooth" });
      };
      if(menuId === 5) {
        window.open('https://www.google.com/', '_blank');
      };
      setOpened(!opened)
    };
  };

  return (
    <Box
      sx={{
        position: { md: "sticky" },
        top: 0,
        height: { xs: 78, md: 114 },
        zIndex:999,
        backgroundColor: { xs: "transparent", md: "#000000a3" },
        display: "flex",
        backdropFilter: {md:"blur(10px)"},
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 3.5, md: 4.5 },
      }}
    >
      <Box
        sx={{
          width: { xs: 114, md: 229 },
          height: { xs: 54, md: 110 },
          display: "flex",
        }}
      >
        <img src="/resources/Logo.svg" />
      </Box>
      {!isMedium && (
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {MENUS.map(
              (menu) =>
                menu.id < 6 && (
                  <Button
                    id={menu.id}
                    onClick={menuHandler}
                    key={`d-${menu.id}`}
                    sx={{
                      color: "#847C91",
                      fontSize: 20,
                      fontWeight: 300,
                      textTransform: "none",
                      mx: 1,
                      "&:hover": {
                        color: "#C6ACEC",
                        background: "unset",
                      },
                      "&:focus": {
                        background: "unset",
                      }
                    }}
                  >
                    {menu.label}
                  </Button>
                )
            )}
          </Box>
          <Box className="AppButtonMain">
          <Button
            className="AppButton"
          >
            Launch App
          </Button>
          </Box>
        </>
      )}
      {isMedium && (
        <MenuIcon sx={{ color: "#FFF" }} onClick={() => setOpened(!opened)} />
      )}
      <Drawer anchor="right" open={opened} onClose={() => setOpened(!opened)}>
        <Box
          sx={{
            width: "80vw",
            minHeight: "100vh",
            backgroundColor: "#150737",
            display: "flex",
            flexDirection: "column",
            pt: 5,
          }}
        >
          {MENUS.map((menu) => (
            <Button
              key={`m-${menu.id}`}
              id={menu.id}
              onClick={menuHandler}
              sx={{ color: "#FFF", textTransform: "none", mb: 0.5 }}
            >
              {menu.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
