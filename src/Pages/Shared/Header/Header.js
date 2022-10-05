import { Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import logo from "../../../assets/images/Capture-removebg-preview.png";
import HeaderButtons from "./HeaderButtons";
import HeaderLinks from "./HeaderLinks";
import NavSearch from "./NavSearch";

const StyledHeader = styled(AppBar)`
  background-color: #19456b;
  position: static;
`;

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              color: "white",
            }}
            component={"a"}
            href={"/"}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <img style={{ width: "45px" }} src={logo} alt="" />
            </IconButton>

            <Tooltip title="Muslims-Mart" placement="bottom-end">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                M-Mart
              </Typography>
            </Tooltip>
          </Box>
          <Box>
            <NavSearch></NavSearch>
          </Box>
          <Box>
            <HeaderLinks></HeaderLinks>
          </Box>

          <Box>
            <HeaderButtons></HeaderButtons>
          </Box>
        </Toolbar>
      </StyledHeader>
    </Box>
  );
};

export default Header;
