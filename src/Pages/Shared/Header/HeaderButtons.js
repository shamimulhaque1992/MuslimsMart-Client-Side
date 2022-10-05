import {
  default as AccountCircle,
  default as AccountCircleIcon,
} from "@mui/icons-material/AccountCircle";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";
import Login from "../../Login/Login";
import { styled } from "@mui/material";
import { indigo, green } from "@mui/material/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import { signOut } from "firebase/auth";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[800]),
  backgroundColor: indigo[800],
  "&:hover": {
    backgroundColor: green[600],
  },
}));

const HeaderButtons = () => {
  const [user, loading, error] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  useEffect(() => {
    console.log(user?.photoURL);
  }, [user]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const openLoginModal = () => {
    setShow(true);
  };
  const handleLogout = () => {
    signOut(auth);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <AccountCircleIcon style={{ marginRight: 4 }}></AccountCircleIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <DashboardCustomizeIcon
          style={{ marginRight: 4 }}
        ></DashboardCustomizeIcon>
        Dashboard
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          handleLogout();
        }}
      >
        <PowerSettingsNewIcon style={{ marginRight: 4 }}></PowerSettingsNewIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle></AccountCircle>
        </IconButton>
        <p>{user?.displayName}</p>
      </MenuItem>
    </Menu>
  );

  if (loading) {
    console.log("loading");
  }
  if (error) {
    console.log("error");
  }
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }} />

      {user ? (
        <>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Typography>{user?.displayName}</Typography>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          {renderMobileMenu}
          {renderMenu}
        </>
      ) : (
        <ColorButton
          variant="contained"
          size="small"
          onClick={() => openLoginModal()}
        >
          <ExitToAppIcon
            style={{ marginRight: 4, color: "white" }}
          ></ExitToAppIcon>
          <Typography
            sx={{ display: { xs: "none", md: "block" }, color: "white" }}
          >
            Login
          </Typography>
        </ColorButton>
      )}
      <Login show={show} setShow={setShow}></Login>
    </Box>
  );
};

export default HeaderButtons;
