import { AppBar, CssBaseline, Toolbar, Typography, Box } from "@mui/material";
import { flexbox } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <CssBaseline>
      <AppBar
        sx={{
          position: "sticky",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: flexbox,
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">
              HVG-(Hanumanthu Vamshi Gangadhar)
            </Typography>
            <Typography
              sx={{
                color: "#a7ef10",
              }}
            >
              Temparature Control App
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Header;
