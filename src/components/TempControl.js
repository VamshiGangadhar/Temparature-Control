import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  CssBaseline,
} from "@mui/material";
import React from "react";
import "../App.css";
import { useState } from "react";

const TempControl = () => {
  const [count, setCount] = useState(0);
  const handleTempIncrement = () => {
    setCount(count + 1);
    if (count > 15) {
      document.getElementById("color").style.backgroundColor = "orange";
    }
    if (count < 16) {
      document.getElementById("color").style.backgroundColor = "lightblue";
    }
    if (count > 35) {
      document.getElementById("color").style.backgroundColor = "red";
    }
  };
  const handleTempDecrement = () => {
    setCount(count - 1);
    if (count > 16) {
      document.getElementById("color").style.backgroundColor = "orange";
    }
    if (count < 16) {
      document.getElementById("color").style.backgroundColor = "lightblue";
    }
    if (count > 35) {
      document.getElementById("color").style.backgroundColor = "red";
    }
  };

  return (
    <CssBaseline>
      <Container className="mainBox" sx={{ padding: 5, left: 5 }}>
        <Paper
          sx={{
            bgcolor: "#D68A00",
            marginTop: 2,
            paddingTop: 2,
            justifyContent: "center",
            width: "280px",
            height: "300px",
            alignContent: "center",
            textAlign: "center",
          }}
          elevation={10}
        >
          <Typography
            sx={{
              marginLeft: 9,
              marginTop: 4,
              paddingTop: 3,
            }}
            id="color"
            className="mainspot"
            variant="h5"
          >
            {count} <span>&deg;C</span>
          </Typography>
          <Box
            sx={{
              fontSize: 5,
              marginTop: 2,
            }}
          >
            <Button
              sx={{
                marginRight: 1,
              }}
              color="error"
              onClick={handleTempIncrement}
              variant="contained"
            >
              +
            </Button>
            <Button
              color="success"
              onClick={handleTempDecrement}
              variant="contained"
            >
              -
            </Button>
          </Box>
        </Paper>
      </Container>
    </CssBaseline>
  );
};

export default TempControl;
